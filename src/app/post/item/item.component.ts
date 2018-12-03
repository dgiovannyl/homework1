import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../post.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() post: Post;
  @Output() selectedPost = new EventEmitter<Post>();

  constructor() {}

  ngOnInit() {}

  selectPost() {
    this.selectedPost.emit(this.post);
  }
}
