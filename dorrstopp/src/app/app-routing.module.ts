import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DsFrontpageComponent} from './components/ds-frontpage/ds-frontpage.component'
import { DsKontaktComponent } from './components/ds-kontakt/ds-kontakt.component';
import { DsStoppisTableComponent } from './components/ds-stoppis-table/ds-stoppis-table.component';

const routes: Routes = [
  {path: '', component: DsFrontpageComponent},
  {path: 'home', component: DsFrontpageComponent},
  {path: 'stoppis', component: DsStoppisTableComponent},
  {path: 'kontakt', component: DsKontaktComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
