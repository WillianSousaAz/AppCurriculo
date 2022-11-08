import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuemSouPageRoutingModule } from './quem-sou-routing.module';

import { QuemSouPage } from './quem-sou.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuemSouPageRoutingModule
  ],
  declarations: [QuemSouPage]
})
export class QuemSouPageModule {}
