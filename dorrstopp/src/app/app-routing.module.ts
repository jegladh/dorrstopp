import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DsFrontpageComponent} from './components/ds-frontpage/ds-frontpage.component'
import { DsKontaktComponent } from './components/ds-kontakt/ds-kontakt.component';
import { DsStoppisDetailComponent } from './components/ds-stoppis-detail/ds-stoppis-detail.component';
import { DsStoppisTableComponent } from './components/ds-stoppis-table/ds-stoppis-table.component';

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  // {path: '', component: DsFrontpageComponent},
  {path: 'home', component: DsFrontpageComponent},
  {path: 'stoppis', component: DsStoppisTableComponent},
  {path: 'kontakt', component: DsKontaktComponent},
  {path: 'kil/:id', component: DsStoppisDetailComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
