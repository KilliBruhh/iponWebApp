import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ServerService } from '../server.service';
import { combos } from '../combos';

@Component({
  selector: 'app-combos-create',
  templateUrl: './combos-create.component.html',
  styleUrls: ['./combos-create.component.css']
})
export class CombosCreateComponent implements OnInit {

  @ViewChild('addCombosForm') combosForm!: NgForm;
  nameCombo!: any;
  discriptionCombo!: any;
  videoCombo!: any;
  colorPicker!: any;

  constructor(private ServerService: ServerService) { }

  ngOnInit(): void {
  }

  errorReason:string = "Reason not known";
  validForm = false;
  invalidForm = false;

  // ngIf gebruiken voor form validation
  onAddCombos(addCombosForm: NgForm): void{
    if(!addCombosForm.valid){
      this.invalidForm = true;
      this.errorReason = "Empty fields!";

      return;
    }
    else{     
      const newCombo = {
        id: null,
        comboName: this.combosForm.value.nameCombo,
        discription: this.combosForm.value.discriptionCombo,
        video: this.combosForm.value.videoCombo,
        colorPicker: this.combosForm.value.colorPicker

      }
      this.ServerService.addCombo(newCombo).subscribe(
        (response) => {
          console.log('combos: ',response);
          this.validForm = true;
        }
      ),
      (error: any) => console.log('error', error);
    }
  }

}
