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

  constructor(private ServerService: ServerService) { }

  ngOnInit(): void {
  }

  onAddCombos(): void{
    console.log("Monkey");
    const newCombo = {
      id: null,
      comboName: this.combosForm.value.nameCombo,
      discription: this.combosForm.value.discriptionCombo,
      video: this.combosForm.value.videoCombo
    }
    this.ServerService.addCombo(newCombo).subscribe(
      (response) => {
        console.log('combos: ',response);
        
      }
    ),
    (error: any) => console.log('error', error);
    
  }

}
