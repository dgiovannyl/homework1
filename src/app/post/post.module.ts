import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { DetailModule } from '../detail/detail.module';
import { ItemComponent } from './item/item.component';
import { PostComponent } from './post.component';
import { PostService } from './post.service';

@NgModule({
  imports: [CommonModule, DetailModule, HttpClientModule],
  declarations: [PostComponent, ItemComponent],
  exports: [PostComponent],
  providers: [PostService]
})
export class PostModule {}
