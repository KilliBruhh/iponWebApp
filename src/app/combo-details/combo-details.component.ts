import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { combos } from '../combos';
import { ServerService } from '../server.service';


@Component({
  selector: 'app-combo-details',
  templateUrl: './combo-details.component.html',
  styleUrls: ['./combo-details.component.css']
})
export class ComboDetailsComponent implements OnInit {

  idOfCombo = 0;
  parameterSub: Subscription | undefined;
  combos : combos[]= [];

  comboName!: any;
  discription!: any;
  video!: any;
  colorPicker!: any;
 

  

  constructor(private route: ActivatedRoute, private serverService: ServerService) {}

  ngOnInit(): void {
    this.parameterSub = this.route.params.subscribe(params => {
      this.idOfCombo = +params['id'];
    })
    this.serverService.getCombosByIdDetails(this.idOfCombo).subscribe((result: any)=>{      
      this.comboName = result['comboName'];
      this.discription = result['discription'];
      this.video = result['video'];
      this.colorPicker = result['colorPicker'];   
      console.log(this.comboName);
    });
  }

}
