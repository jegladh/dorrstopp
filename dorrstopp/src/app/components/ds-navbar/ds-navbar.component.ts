import { Component, ViewEncapsulation, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ds-navbar',
  templateUrl: './ds-navbar.component.html',
  styleUrls: ['./ds-navbar.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DsNavbarComponent implements OnInit {


  @Input() bottom = false;
  @Input() activeLink = links[0];
  @Output() activeLinkChange: EventEmitter<any> = new EventEmitter<any>();
/**
 * tab: Namnet på taben
 * link: Länk till sidan definierat i routing
 */

  constructor() { }

  ngOnInit(): void {
    this.activeLinkChange.emit(this.activeLink)
  }

  onLinkClick(link: any) {
    this.activeLink = link;
    this.activeLinkChange.emit(link);
  }

  links: any = links;
}

export const links = [
  {tab:'föreningen',link:'home'}, 
  {tab:'stoppisar',link:'stoppis'},
  {tab:'fester', link:'fester'},
  {tab:'kontakt', link:'kontakt'},
  {tab:'länkar', link:'länkar'},
];
