import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-ds-stoppis-detail',
  templateUrl: './ds-stoppis-detail.component.html',
  styleUrls: ['./ds-stoppis-detail.component.css']
})
export class DsStoppisDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
    this.getKil()
  }
  goBack(): void {
    this.location.back();
  }
  // TODO lägg till service för att häta specifik kil
  getKil(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id)
  }
}
