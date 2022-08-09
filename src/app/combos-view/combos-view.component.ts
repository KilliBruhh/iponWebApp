import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute ,Router } from '@angular/router';
import { combos } from '../combos';
import { ServerService } from '../server.service';
import { NgForm } from '@angular/forms';




@Component({
  selector: 'app-combos-view',
  templateUrl: './combos-view.component.html',
  styleUrls: ['./combos-view.component.css']
})
export class CombosViewComponent implements OnInit {

  constructor(private router: Router,private serverService: ServerService, private route: ActivatedRoute) { }

  @ViewChild('combosForm') combosForm!: NgForm;
  idCombo!: any;
  comboName!: any;
  discription!: any;
  video!: any;
  colorPicker!: any;

  public name = "Tester";

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
  editComboSubmit(){
    console.log(this.combosForm.value);
    this.serverService.editCombo(this.currentIdOfChosenCombo, this.combosForm.value).subscribe(
      (result: any) => {  
        console.log('combo edited: ', result);              
      }      
    )
    //this.getCombosServer();
  
    //this.currentIdOfChosenCombo = 0;
  }

  fillFormFromDb(val: any){
    this.serverService.getCombosById(val).subscribe((result: any)=>{      
      this.comboName = result['comboName'];
      this.discription = result['discription'];
      this.video = result['video'];
      this.colorPicker = result['colorPicker'];    
      this.currentIdOfChosenCombo = val;
    });
  }

}
