import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-test-http',
  templateUrl: './test-http.page.html',
  styleUrls: ['./test-http.page.scss'],
})
export class TestHttpPage implements OnInit {
  posts: any[];
  private postCount = 0;
  private postStep = 10;

  constructor(private http: HttpClient) {}

  refreshData(refresher) {
    this.posts = [];
    this.postCount = 0;
    this.loadData(refresher);
  }

  loadData(refresher) {
    this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .pipe(
        map((res: Array<any>) =>
          res.filter(
            (row) =>
              row.id > this.postCount && row.id < this.postCount + this.postStep
          )
        )
      )
      .subscribe((data) => {
        this.posts = this.posts.concat(data);
        if (refresher) {
          refresher.target.complete();
        }
        this.postCount += this.postStep;
      });
  }

  ngOnInit() {
    this.refreshData(false);
  }
}
