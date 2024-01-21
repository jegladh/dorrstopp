import { AfterViewInit, Component,OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';
import { Router } from '@angular/router';


import { DsStoppisDialogComponent } from '../ds-stoppis-dialog/ds-stoppis-dialog.component';
import { Stoppis } from '../interface/stoppis';
import { STOPPISAR } from '../mock-stoppis';
import { DsStoppisService } from '../service/ds-stoppis-service/ds-stoppis.service';


@Component({
  selector: 'app-ds-stoppis-table',
  templateUrl: './ds-stoppis-table.component.html',
  styleUrls: ['./ds-stoppis-table.component.css']
})
export class DsStoppisTableComponent implements OnInit ,AfterViewInit {
  displayedColumns: string[] = [ 'examen','nummer', 'kepsnamn', 'namn'];
  stoppisarFromService: Stoppis[] = [];
  dataSource: any;
  @ViewChild(MatSort) sort!: MatSort; // not null operator neede angular runs in strict mode

  ngOnInit(): void {
    this.stoppisService.getAllaStoppisar().subscribe((result)=>{
      this.dataSource = result;
      console.log(result);
    })
    //this.getStoppisar()
  }
  constructor( private router: Router, private stoppisService: DsStoppisService) { }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  clickRow(row: Stoppis){
    this.router.navigate(['/kil/', row.nummer])

  }

  tagitExamen(row: Stoppis){
    if (row.examen){
    }
  }
   getStoppisar(): void {
      this.stoppisService.getStoppisar()
      .subscribe(stoppis => {
        this.stoppisarFromService = stoppis
        this.dataSource = new MatTableDataSource(stoppis);
      });
    }
}
