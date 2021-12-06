import { Component, OnInit } from '@angular/core';
import { FruitService } from '../service/fruit.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  listofFruits: any[]= []
  constructor(private service: FruitService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((data: any[])=> {
      this.listofFruits = data;
    })
  }

}
