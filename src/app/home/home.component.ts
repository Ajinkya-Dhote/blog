import { Component, OnInit } from '@angular/core';
import { HttpModule, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { PostInterface } from '../post/post-interface';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: Http) {
    this.getPosts();
  }

  public posts: any[];

    getPosts(): void {
      this.fetchPostFromServer()
        .then( result => {
          this.posts = result.post;
          console.log(this.posts);
        });
    }

    fetchPostFromServer(): Promise<any> {
      let url = 'https://jsonplaceholder.typicode.com/todos';
      url = '../../assets/data/post.json';
      // url = '../../assets/data/data2.json'
      // url = '../../assets/data/metrics.json'
      return this.http.get(url)
       .map(res => res.json())
       .toPromise()
       .then(
         (res: Response) => {
           return res;
         }
       ).catch(this.handleError);
     }

     private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
    }

  ngOnInit() {
  }

}
