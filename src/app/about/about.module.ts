import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';

@NgModule({
  imports: [CommonModule, NgbModule, AboutRoutingModule],
  declarations: [AboutComponent]
})

export class AboutModule { }
