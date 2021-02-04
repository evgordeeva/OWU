import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Post} from '../../models/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post: Post;

  @Output()
  bubbleUp = new EventEmitter<Post>();

  constructor() {
  }

  ngOnInit(): void {
  }

  getPostInfo(post: Post): void {
    console.log(post);
    this.bubbleUp.emit(post);
  }

}
