import { Component, Input, OnInit } from '@angular/core';
import { belts } from '../belts';
import { ServerService } from '../server.service';


@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})

export class AchievementsComponent implements OnInit {

  // Video Gebruikt voor slideshow


  constructor(private serverService: ServerService) { }

  selectedIndex = 0;

  @Input() indicators = true;
  @Input() controls = true;
  @Input() info = true;
 
  selectedImage(index: number): void{
    this.selectedIndex = index;
  }

  belts : belts[]= [];

  idBelt!: any;
  nameBelt!: any;
  imageBelt!: any;
  kataBelt!: any;
  achievedBelt!: any;


  ngOnInit(): void {
    this.getBeltsFromServer();
  }

  getBeltsFromServer(): void {
    this.serverService.getBelts().subscribe(
      (response: belts[])=>{
        console.log('combos: ',response)
        this.belts = response;
      },
      (error) => console.log('error: ',error),
        () => console.log('ready!')
    );
  }

  // press Left button
  prevBelt(): void {
    if(this.selectedIndex === 0) {
      this.selectedIndex = this.images.length - 1;
    }
    else {
      this.selectedIndex--;
    }
  }

  // press right button
  nextBelt(): void {
    if(this.selectedIndex === this.images.length - 1) {
      this.selectedIndex = 0;
    }
    else {
      this.selectedIndex++;
    }
  }

  getBeltById(id: any) {
    this.serverService.getBeltById(id).subscribe((result: any) => {
      this.nameBelt = result['Belt'];
      this.imageBelt = result['image'];
      this.kataBelt = result['kata'];
      this.achievedBelt = result['achieved'];
    });
  }

  // Article used for checking if the box is checked or not.
  // https://www.codegrepper.com/code-examples/javascript/angular+7+input+checkbox%27%27+%28checked%29
  checkBelt(checkOrNot: boolean, beltId: any, indexNum: number): void {
    this.getBeltById(beltId);
    console.log(this.nameBelt);

    this.achievedBelt = checkOrNot;

   
    this.serverService.editBelt(beltId, checkOrNot).subscribe (
      (result: any) => {  
        console.log('Belt edited: ', result);              
      }        
    );
  }


  // TODO --> remove the ngIf with the dummy data (extra time)

  images = [
    {
      imageSrc: 'assets/WhiteObi.jpg',
      imageAlt: 'White',
    },
    {
      imageSrc: 'assets/YellowObi.jpg',
      imageAlt: 'Yellow',
    },
    {
      imageSrc: 'assets/OrangeObi.jpg',
      imageAlt: 'Orange',
    },
    {
      imageSrc: 'assets/GreenObi.jpg',
      imageAlt: 'Green',
    },
    {
      imageSrc: 'assets/BlueObi.jpg',
      imageAlt: 'Blue',
    },
    {
      imageSrc: 'assets/BrownObi.jpg',
      imageAlt: 'Brown',
    },
    {
      imageSrc: 'assets/BlackObi.jpg',
      imageAlt: 'Black',
    },
  ]

}
