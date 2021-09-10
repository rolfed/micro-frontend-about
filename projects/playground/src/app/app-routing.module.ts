import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// DO NOT IMPORT LAZY LOADED MODULES
// LAZY LOADED MECHANISM HANDLES IMPORTS

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@umpqua-bank/about').then(m => m.AboutModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
