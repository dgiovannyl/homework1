import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from './post.interface';

@Injectable()
export class PostService {

  readonly postFilter = 'posts';

  constructor(private httpClient: HttpClient) {}

  getPostList(): Observable<Post[]> {
    const postsUrl = `${environment.apiUrl}${this.postFilter}`;
    return this.httpClient.get<Post[]>(postsUrl);
  }
}
