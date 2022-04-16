import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-combo-personel',
  templateUrl: './combo-personel.component.html',
  styleUrls: ['./combo-personel.component.css']
})
export class ComboPersonelComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }

}
