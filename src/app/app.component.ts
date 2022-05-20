import { Component } from '@angular/core';
import { combos } from './combos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'iponWebApp';

  combos : combos[] = [];
}
