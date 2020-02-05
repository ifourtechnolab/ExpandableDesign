import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [{
  path: '',
  component: HomePage
}, {
  path: 'detail',
  component: DetailComponent
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeRoutingModule { }
