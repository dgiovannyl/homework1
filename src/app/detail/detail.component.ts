import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../post/post.interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  commentList$: Observable<Comment[]>;
  @Input() selectedPost: Post;

  constructor() {}

  ngOnInit() {}
}
