import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../quem-sou/quem-sou.module').then( m => m.QuemSouPageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../certificado/certificado.module').then( m => m.CertificadoPageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../trabalhos/trabalhos.module').then( m => m.TrabalhosPageModule)
      },
      {
        path: 'tab4',
        loadChildren: () => import('../contato/contato.module').then( m => m.ContatoPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
