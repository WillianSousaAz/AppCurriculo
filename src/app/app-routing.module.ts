import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'quem-sou',
    loadChildren: () => import('./quem-sou/quem-sou.module').then( m => m.QuemSouPageModule)
  },
  {
    path: 'certificado',
    loadChildren: () => import('./certificado/certificado.module').then( m => m.CertificadoPageModule)
  },
  {
    path: 'trabalhos',
    loadChildren: () => import('./trabalhos/trabalhos.module').then( m => m.TrabalhosPageModule)
  },
  {
    path: 'contato',
    loadChildren: () => import('./contato/contato.module').then( m => m.ContatoPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
