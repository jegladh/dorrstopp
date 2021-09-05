import { Component,OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DsStoppisDialogComponent } from '../ds-stoppis-dialog/ds-stoppis-dialog.component';
import { Stoppis } from '../interface/stoppis';
import { STOPPISAR } from '../mock-stoppis';


@Component({
  selector: 'app-ds-stoppis-table',
  templateUrl: './ds-stoppis-table.component.html',
  styleUrls: ['./ds-stoppis-table.component.css']
})
export class DsStoppisTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nick', 'name',];
  dataSource = new MatTableDataSource(STOPPISAR);

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  clickRow(row: Stoppis){
    console.log(row)
    this.dialog.open(DsStoppisDialogComponent, {
      data: {
        name: row.name, 
        id: row.id,
        nick: row.nick,
      }
      });
  }


}
