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
import { DsKontaktComponent } from './components/ds-kontakt/ds-kontakt.component';
import { DsStoppisDetailComponent } from './components/ds-stoppis-detail/ds-stoppis-detail.component';
import {MatListModule} from '@angular/material/list';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { InloggDialogComponent } from './components/inlogg-dialog/inlogg-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    DsFrontpageComponent,
    DsNavbarComponent,
    DsStoppisTableComponent,
    DsKontaktComponent,
    DsStoppisDetailComponent,
    InloggDialogComponent
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
    MatSortModule,
    MatListModule,
    HttpClientModule,
    MatCardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
