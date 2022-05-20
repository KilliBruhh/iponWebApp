import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { combos } from '../combos';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-combos-view',
  templateUrl: './combos-view.component.html',
  styleUrls: ['./combos-view.component.css']
})
export class CombosViewComponent implements OnInit {

  constructor(private router: Router,private serverService: ServerService) { }


  combos : combos[]= [];
  ngOnInit(): void {
    this.getCombosServer();
  }
  
  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }

  getCombosServer(): void{
    this.serverService.getCombos().subscribe(
      (response: combos[])=>{
        console.log('combos: ',response)
        this.combos = response;
      },
      (error) => console.log('error: ',error),
        () => console.log('ready!')
      );
  }

  delCombo(val: any){
    if (confirm("Do you want to Delete your EPIC Combo? (It will be gone forever (LONG TIME)) ")){
    this.serverService.deleteCombo(val).subscribe(
      combo => {});
    this.serverService.deleteCombo(val).subscribe((response) => {
      this.combos = response;
    });
  }
  this.getCombosServer();
  }
  
}
