import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';

@NgModule({
  imports: [CommonModule, NgbModule, NewsRoutingModule],
  declarations: [NewsComponent]
})

export class NewsModule { }
