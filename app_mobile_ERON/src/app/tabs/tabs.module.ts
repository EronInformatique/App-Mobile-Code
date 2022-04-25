import { SharedComponentsApprenantModule } from './../components/shared/shared-components-apprenant.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { SharedAllComponentsModule } from '../components/shared/shared-all-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule,
    FontAwesomeModule,
    SharedComponentsApprenantModule,
    SharedAllComponentsModule,
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
