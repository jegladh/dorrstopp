import { Component } from '@angular/core';
import { links } from './components/ds-navbar/ds-navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dorrstopp';
  activeLink: any = links[0];
}
