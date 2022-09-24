import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { InloggDialogComponent } from './components/inlogg-dialog/inlogg-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dorrstopp';
  date = new FormControl(new Date());
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(InloggDialogComponent);
  }
  ngOnInit(): void {
  }
}
