import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormationApprenantDetailPageRoutingModule } from './formation-apprenant-detail-routing.module';

import { FormationApprenantDetailPage } from './formation-apprenant-detail.page';
import { SharedComponentsApprenantModule } from 'src/app/components/shared/shared-components-apprenant.module';
import { SharedAllComponentsModule } from 'src/app/components/shared/shared-all-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormationApprenantDetailPageRoutingModule,
    SharedComponentsApprenantModule,
    SharedAllComponentsModule
  ],
  declarations: [FormationApprenantDetailPage]
})
export class FormationApprenantDetailPageModule {}
