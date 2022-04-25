import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactsPageRoutingModule } from './contacts-routing.module';

import { ContactsPage } from './contacts.page';
import { SharedComponentsModule } from 'src/app/components/shared/shared-components.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactsPageRoutingModule,
    FontAwesomeModule,
    SharedComponentsModule
  ],
  declarations: [ContactsPage]
})
export class ContactsPageModule {}
