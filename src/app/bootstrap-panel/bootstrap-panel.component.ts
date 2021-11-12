import { Component, Input, OnInit } from '@angular/core';
import { expandCollapseTrigger } from 'animate/animate';

@Component({
  selector: 'bootstrap-panel',
  templateUrl: './bootstrap-panel.component.html',
  styleUrls: ['./bootstrap-panel.component.css'],
  animations: [ expandCollapseTrigger ]
})
export class BootstrapPanelComponent implements OnInit {
  @Input("ShowDiv")showDiv?: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  toggleDiv(){
    this.showDiv= !this.showDiv;
  }
}
