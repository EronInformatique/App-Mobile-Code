import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabFormationPage } from './tab-formation.page';

const routes: Routes = [
  {
    path: '',
    component: TabFormationPage
  },
  // {
  //   path: 'formation-apprenant-detail',
  //   loadChildren: () => import('./formation-apprenant-detail/formation-apprenant-detail.module').then( m => m.FormationApprenantDetailPageModule)
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabFormationPageRoutingModule {}
