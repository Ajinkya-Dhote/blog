import { Component, OnInit } from '@angular/core';
import { PostInterface } from '../post/post-interface';
import { Router, ActivatedRoute } from '@angular/router';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }
  post: PostInterface;
  private sub: any;
  ngOnInit() {
    this.sub = this.route
    .queryParams
    .subscribe(params => {
      // Defaults to 0 if no query param provided.
      this.post =  params['post'];
      console.log(this.post);
    });
  }

}
