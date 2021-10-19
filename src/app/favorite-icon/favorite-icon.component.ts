import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fav-icon',
  templateUrl: './favorite-icon.component.html',
  styleUrls: ['./favorite-icon.component.css']
})
export class FavoriteIconComponent implements OnInit {
  @Input() favCount?: number;
  @Input() isFavorite?: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){  
    this.isFavorite = !this.isFavorite;
    if(this.favCount != undefined)
       this.favCount += this.isFavorite ? +1 : -1;
  }
}
