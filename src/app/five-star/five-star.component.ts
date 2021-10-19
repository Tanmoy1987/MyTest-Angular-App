import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'five-star',
  templateUrl: './five-star.component.html',
  styleUrls: ['./five-star.component.css']
})
export class FiveStarComponent {

  defaultCounter: number = 5;
  @Input("Rating") ratingCounter?: number;
  
  counter(i: number): any[] {
    return new Array(i);
  }
  evaluateIfConditionTrue(x: number, y?: number): boolean{
    return y != undefined ? x <= y: false;
  }

  displayRating(i: number){
    this.ratingCounter = i;
  }
}
