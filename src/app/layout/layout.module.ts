import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

@NgModule({
  imports: [CommonModule, NgbModule, LayoutRoutingModule],
  declarations: [LayoutComponent]
})

export class LayoutModule { }
