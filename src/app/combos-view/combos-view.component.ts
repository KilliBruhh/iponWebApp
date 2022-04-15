import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-combos-view',
  templateUrl: './combos-view.component.html',
  styleUrls: ['./combos-view.component.css']
})
export class CombosViewComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }
  
  
}
