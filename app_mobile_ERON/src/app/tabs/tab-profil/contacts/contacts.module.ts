import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactsPageRoutingModule } from './contacts-routing.module';

import { ContactsPage } from './contacts.page';
import { SharedComponentsApprenantModule } from 'src/app/components/shared/shared-components-apprenant.module';
import { SharedAllComponentsModule } from 'src/app/components/shared/shared-all-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactsPageRoutingModule,
    SharedComponentsApprenantModule,
    FontAwesomeModule,
    SharedAllComponentsModule
  ],
  declarations: [ContactsPage]
})
export class ContactsPageModule {}
