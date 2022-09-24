import { Component, ViewEncapsulation, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InloggDialogComponent } from '../inlogg-dialog/inlogg-dialog.component';


@Component({
  selector: 'app-ds-navbar',
  templateUrl: './ds-navbar.component.html',
  styleUrls: ['./ds-navbar.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DsNavbarComponent {
activeLink:string = 'home'; // första markerade componeneten när listan laddas 
constructor(public dialog: MatDialog) {}

openDialog() {
  this.dialog.open(InloggDialogComponent);
}
}
