import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: AboutComponent
  }
];

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    AboutComponent
  ]
})
export class AboutModule { }
