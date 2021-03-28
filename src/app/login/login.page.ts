import { DataGetterService } from './../services/data-getter.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string;
  password: string;

  constructor(
    private router: Router,
    private dataGetter: DataGetterService,
    public alertController: AlertController
  ) {}

  ngOnInit() {}

  login() {
    this.dataGetter
      .checkUser({
        username: this.username,
        password: this.password,
      })
      .subscribe((result) => {
        if (result.hasOwnProperty('error')) {
          this.userNotExistAlert(result.error);
        } else {
          if (result.hasOwnProperty('token')) {
            this.dataGetter.setUser(this.username);
            this.dataGetter.setToken(result.token);
            this.router.navigate(['/home']);
          } else {
            this.userNotExistAlert('Unexpected error');
          }
        }
      });
  }

  async userNotExistAlert(message) {
    const alert = await this.alertController.create({
      header: 'Attention!',
      subHeader: 'Authentication error',
      message: `User ${this.username} doesn't exists`,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
