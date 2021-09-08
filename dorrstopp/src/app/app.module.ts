import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSortModule} from '@angular/material/sort';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DsFrontpageComponent } from './components/ds-frontpage/ds-frontpage.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatTabsModule} from '@angular/material/tabs';
import { MatTableModule} from '@angular/material/table';
import { DsNavbarComponent } from './components/ds-navbar/ds-navbar.component';
import {  DsStoppisTableComponent} from './components/ds-stoppis-table/ds-stoppis-table.component';
import {MatFormFieldModule,} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { DsStoppisDialogComponent } from './components/ds-stoppis-dialog/ds-stoppis-dialog.component';
import { DsKontaktComponent } from './components/ds-kontakt/ds-kontakt.component';
import { DsStoppisDetailComponent } from './components/ds-stoppis-detail/ds-stoppis-detail.component'; 

@NgModule({
  declarations: [
    AppComponent,
    DsFrontpageComponent,
    DsNavbarComponent,
    DsStoppisTableComponent,
    DsStoppisDialogComponent,
    DsKontaktComponent,
    DsStoppisDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatTabsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSortModule
  ],
  providers: [],
  // bootstrap: [DsFrontpageComponent]
  bootstrap: [AppComponent]
})
export class AppModule { }
