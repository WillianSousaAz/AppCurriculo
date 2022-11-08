import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuemSouPage } from './quem-sou.page';

const routes: Routes = [
  {
    path: '',
    component: QuemSouPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuemSouPageRoutingModule {}
