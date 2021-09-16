import { Component, ViewEncapsulation, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-ds-navbar',
  templateUrl: './ds-navbar.component.html',
  styleUrls: ['./ds-navbar.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DsNavbarComponent {
activeLink:string = 'home'; // första markerade componeneten när listan laddas 
  constructor() { }
}
