import { AfterViewInit, Component,OnInit, SystemJsNgModuleLoader, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

import { DsStoppisDialogComponent } from '../ds-stoppis-dialog/ds-stoppis-dialog.component';
import { Stoppis } from '../interface/stoppis';
import { STOPPISAR } from '../mock-stoppis';


@Component({
  selector: 'app-ds-stoppis-table',
  templateUrl: './ds-stoppis-table.component.html',
  styleUrls: ['./ds-stoppis-table.component.css']
})
export class DsStoppisTableComponent implements AfterViewInit {
  displayedColumns: string[] = [ 'examen','id', 'nick', 'name'];
  dataSource = new MatTableDataSource(STOPPISAR);
  @ViewChild(MatSort) sort!: MatSort; // not null operator neede angular runs in strict mode

  constructor( private router: Router) { }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  clickRow(row: Stoppis){
    console.log(row)
    // this.router.navigate(['/kil/', row.id])
    this.router.navigate(['/kil/', row.id])

  }
  tagitExamen(row: Stoppis){
    if (row.examen){
      
    }
  }



}
