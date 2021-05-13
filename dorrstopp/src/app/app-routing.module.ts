import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DsFrontpageComponent} from './components/ds-frontpage/ds-frontpage.component'

const routes: Routes = [
  {path: 'dorrstopp', component: DsFrontpageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
