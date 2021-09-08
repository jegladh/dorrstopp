import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DsStoppisService } from '../service/ds-stoppis-service/ds-stoppis.service';
import { Stoppis } from '../interface/stoppis';
@Component({
  selector: 'app-ds-stoppis-detail',
  templateUrl: './ds-stoppis-detail.component.html',
  styleUrls: ['./ds-stoppis-detail.component.css']
})
export class DsStoppisDetailComponent implements OnInit {
  kil!: Stoppis;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private stoppisService: DsStoppisService
    ) { }

  ngOnInit(): void {
    this.getKil()
  }

  goBack(): void {
    this.location.back();
  }

  getKil(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.stoppisService.getKil(id)
    .subscribe(kil => {
      this.kil = kil;
    });
  } 
}
