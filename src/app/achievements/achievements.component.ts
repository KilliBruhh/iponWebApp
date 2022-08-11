import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})

export class AchievementsComponent implements OnInit {

  // Video Gebruikt voor slideshow


  // constructor() { }

  selectedIndex = 0;

  @Input() indicators = true;
  @Input() controls = true;
 
  selectedImage(index: number): void{
    this.selectedIndex = index;
  }

  ngOnInit(): void {
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
