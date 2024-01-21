import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSortModule} from '@angular/material/sort';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DsFrontpageComponent } from './components/ds-frontpage/ds-frontpage.component';
import { MatLegacyTabsModule as MatTabsModule} from '@angular/material/legacy-tabs';
import { MatLegacyTableModule as MatTableModule} from '@angular/material/legacy-table';
import { DsNavbarComponent } from './components/ds-navbar/ds-navbar.component';
import {  DsStoppisTableComponent} from './components/ds-stoppis-table/ds-stoppis-table.component';
import {MatLegacyFormFieldModule as MatFormFieldModule,} from '@angular/material/legacy-form-field';
import {MatLegacyInputModule as MatInputModule} from '@angular/material/legacy-input';
import {MatLegacyDialogModule as MatDialogModule} from '@angular/material/legacy-dialog';
import { DsStoppisDialogComponent } from './components/ds-stoppis-dialog/ds-stoppis-dialog.component';
import { DsKontaktComponent } from './components/ds-kontakt/ds-kontakt.component';
import { DsStoppisDetailComponent } from './components/ds-stoppis-detail/ds-stoppis-detail.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    DsFrontpageComponent,
    DsNavbarComponent,
    DsStoppisTableComponent,
    DsStoppisDialogComponent,
    DsKontaktComponent,
    DsStoppisDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSortModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
