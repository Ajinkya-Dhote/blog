import { Component, OnInit, Input, SimpleChanges, SimpleChange, OnChanges } from '@angular/core';
import { PostInterface } from './post-interface';
import { ShareDataServiceService } from '../share-data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnChanges {

  constructor(private sharePost: ShareDataServiceService, private router: Router) {}

  @Input('post') post: PostInterface;

  ngOnChanges(changes: SimpleChanges) { }

  ngViewInit() { }
  ngOnInit() {
  }

  goToPostDetails(id) {
    console.log("sharing data");
    
    console.log(this.post);
    this.sharePost.setPost(this.post);
    this.router.navigate(['/content']);
  }

}
