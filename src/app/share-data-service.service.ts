import { Injectable } from '@angular/core';
import { PostInterface } from './post/post-interface';

@Injectable()
export class ShareDataServiceService {
  private post: PostInterface;
  constructor() { }

  setPost(post): void {
    this.post = post;
    console.log("data set");
    console.log(this.post);
    console.log("data received");
    console.log(post);
  }

  getPost() :  Promise<PostInterface> {
    console.log("returning post");
    console.log(this.post);
    
    
    return Promise.resolve(this.post);
  }

}
