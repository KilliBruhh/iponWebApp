import { Component, OnInit } from '@angular/core';
import { combos } from '../combos';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  combo : combos[]= [];
  
  combosCount = this.combo.length;
}
