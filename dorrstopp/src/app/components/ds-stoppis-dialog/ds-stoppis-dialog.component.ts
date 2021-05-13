import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DsStoppisTableComponent } from '../ds-stoppis-table/ds-stoppis-table.component';
import { Stoppis } from '../interface/stoppis';

@Component({
  selector: 'app-ds-stoppis-dialog',
  templateUrl: './ds-stoppis-dialog.component.html',
  styleUrls: ['./ds-stoppis-dialog.component.css']
})
export class DsStoppisDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DsStoppisTableComponent> , @Inject(MAT_DIALOG_DATA) public data: Stoppis) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
