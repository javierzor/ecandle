// src/app/components/shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AnimacionunoPage } from './animacionuno/animacionuno.page';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IonicModule,
    AnimacionunoPage
  ],
  exports: [ AnimacionunoPage],
})
export class SharedModule {}
