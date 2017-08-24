import { Component, OnInit, Input, SimpleChanges, SimpleChange, OnChanges } from '@angular/core';
import { PostInterface } from './post-interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnChanges {

  constructor() {}

  @Input('post') post: PostInterface;

  ngOnChanges(changes: SimpleChanges) {
    console.log('change');
    console.log(changes);
  }

  ngViewInit() {
    console.log('post');
    console.log(this.post);
  }
  ngOnInit() {
  }

}
