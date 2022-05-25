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

  confirmDel = true;
  currentIdOfChosenCombo = 0;
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


  // Modal stuff for deleting combo
  confirmDeleteCombo(){
    console.log("confirm del pressed");
    if (this.confirmDel == true){
      console.log("Del");
    this.serverService.deleteCombo(this.currentIdOfChosenCombo).subscribe(
      combo => {});
    this.serverService.deleteCombo(this.currentIdOfChosenCombo).subscribe((response) => {
      this.combos = response;
    });
    console.log("Confirmed");
  }
  this.getCombosServer();
  }

  delCombo(val: any){
    this.currentIdOfChosenCombo = val;
  }

  // Modal stuff for edeting combo
  confirmEditCombo(){
    // Add Stuff
  }
}
