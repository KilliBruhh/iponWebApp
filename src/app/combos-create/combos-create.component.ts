import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-combos-create',
  templateUrl: './combos-create.component.html',
  styleUrls: ['./combos-create.component.css']
})
export class CombosCreateComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  
  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }


}