import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class CommentService {
  private readonly commentFilter = 'comments?postId=';

  constructor(private httpClient: HttpClient) {}

  getComments(postId: number): Observable<Comment[]> {
    const commentsUrl = `${environment.apiUrl}${this.commentFilter}${postId}`;
    return this.httpClient.get<Comment[]>(commentsUrl);
  }
}
