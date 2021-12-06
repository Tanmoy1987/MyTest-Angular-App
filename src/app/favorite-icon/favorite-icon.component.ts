import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fav-icon',
  templateUrl: './favorite-icon.component.html',
  styleUrls: ['./favorite-icon.component.css']
})
export class FavoriteIconComponent implements OnInit {
  @Input() totalLikes: number =0
  @Input() isFavorite?: boolean;
  myLike: number=0;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){  
    this.isFavorite = !this.isFavorite;
    this.myLike= this.myLike <= 0 ? 1 : -1;
    //this.totalLikes += this.isFavorite ? +1 : -1;
    this.totalLikes +=  this.myLike;

  }
}
