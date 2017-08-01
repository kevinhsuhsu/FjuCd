import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'home', loadChildren: '../home/home.module#HomeModule' },
      { path: 'about', loadChildren: '../about/about.module#AboutModule' },
      { path: 'news', loadChildren: '../news/news.module#NewsModule' },
      { path: 'contact', loadChildren: '../contact/contact.module#ContactModule' }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LayoutRoutingModule { }
