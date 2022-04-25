import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActuEronPageRoutingModule } from './actu-eron-routing.module';

import { ActuEronPage } from './actu-eron.page';
import {SharedComponentsModule } from 'src/app/components/shared/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActuEronPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [ActuEronPage]
})
export class ActuEronPageModule {}
