import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentService } from '../detail/comment/comment.service';
import { Post } from './post.interface';
import { PostService } from './post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  postList$: Observable<Post[]>;
  selectedPost: Post;

  constructor(private postService: PostService, private commentService: CommentService) {}

  ngOnInit() {
    this.postList$ = this.postService.getPostList();
  }

  getSelectedPost(post: Post) {
    this.selectedPost = post;
    this.commentService.getComments(post.id).subscribe((commentList: Comment[]) => {
      this.selectedPost.comments = commentList;
    });
  }
}
