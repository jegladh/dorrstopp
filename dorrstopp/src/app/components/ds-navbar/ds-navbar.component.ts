import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ds-navbar',
  templateUrl: './ds-navbar.component.html',
  styleUrls: ['./ds-navbar.component.css']
})
export class DsNavbarComponent implements OnInit {

  @Input() test: any
  
  topics: Array<any> = [
    {topic: "föreningen", navItem: "1"},
    {topic: "stoppisar", navItem: "2"},
    {topic: "fester", navItem: "3"},
    {topic: "kontakt", navItem: "4"},
    {topic: "länkar", navItem: "5"},
  ]
  constructor() { }

  ngOnInit(): void {
  }
}
