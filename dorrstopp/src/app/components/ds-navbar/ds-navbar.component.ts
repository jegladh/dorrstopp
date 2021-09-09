import { Component, ViewEncapsulation, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ds-navbar',
  templateUrl: './ds-navbar.component.html',
  styleUrls: ['./ds-navbar.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DsNavbarComponent {

/**
 * tab: Namnet på taben
 * link: Länk till sidan definierat i routing
 */
  links = [
    {tab:'Förening',link:'home'}, 
    {tab:'Stoppisar',link:'stoppis'},
    // {tab:'Fester', link:'fester'},
    {tab:'Kontakt', link:'kontakt'},
    // {tab:'länkar', link:'länkar'},
  ];
  activeLink = this.links[0];
  constructor() { }
}
