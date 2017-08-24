import { Component, OnInit } from '@angular/core';
import { PostInterface } from '../post/post-interface';
import { Router, ActivatedRoute } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { ShareDataServiceService } from '../share-data-service.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private sharePost: ShareDataServiceService) { }
  post: PostInterface;
  private sub: any;
  loadPage: boolean = false;
  ngOnInit() {

   this.sharePost.getPost().then(post => {
     this.post = post;
     this.loadPage = true;
    });
    console.log("on view init");
  
  }

  ngOnViewInit() {
    // this.sharePost.getPost().then(post => this.post = post);
    // console.log("on view init");
    
    // console.log(this.post);
    
  }

}
