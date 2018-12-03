import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommentComponent } from './comment/comment.component';
import { CommentService } from './comment/comment.service';
import { DetailComponent } from './detail.component';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [CommentComponent, DetailComponent],
  exports: [DetailComponent],
  providers: [CommentService]
})
export class DetailModule {}
