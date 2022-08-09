import { Component, OnInit } from '@angular/core';
import { combos } from './combos';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'iponWebApp';

  combos : combos[] = [];

  constructor(private router: Router) {}




  ngOnInit(): void {

  }

  goToPage():void{
    this.router.navigate([`/Home`]);
  }

}
