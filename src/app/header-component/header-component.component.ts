import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { combos } from '../combos';
import { ActivatedRoute  } from '@angular/router';
import { ServerService } from '../server.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {

  constructor(private router: Router, private serverService: ServerService) { }

  ngOnInit(): void {
    this.getCombosServer();
  }
  public searchFilter: any = '';

  @ViewChild('combosForm') combosForm!: NgForm;
  idCombo!: any;
  comboName!: any;
  discription!: any;
  video!: any;
  colorPicker!: any;

  combos : combos[]= [];

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

  
  // For Dummy testing 
  // For final verfsion data must be sdearcht in the JSON db
  Students = [{
    "id": 1,
    "name": "Nathaniel Graham",
    "email": "nathaniel.graham@example.com"
  },
  {
    "id": 2,
    "name": "Avery Adams",
    "email": "avery.adams@example.com"
  },
  {
    "id": 3,
    "name": "Mario Stevens",
    "email": "mario.stevens@example.com"
  },
  {
    "id": 4,
    "name": "Constance Beck",
    "email": "constance.beck@example.com"
  },
  {
    "id": 5,
    "name": "Jimmie Little",
    "email": "jimmie.little@example.com"
  },
  {
    "id": 6,
    "name": "Avery Matthews",
    "email": "avery.matthews@example.com"
  },
  {
    "id": 7,
    "name": "Pat Sutton",
    "email": "pat.sutton@example.com"
  },
  {
    "id": 8,
    "name": "Danny Crawford",
    "email": "danny.crawford@example.com"
  },
  {
    "id": 9,
    "name": "Pearl Mccoy",
    "email": "pearl.mccoy@example.com"
  },
  {
    "id": 10,
    "name": "Flenn Wallace",
    "email": "flenn.wallace@example.com"
  }
]
}
