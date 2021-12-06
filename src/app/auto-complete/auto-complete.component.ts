import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css']
})
export class AutoCompleteComponent {
  hideDiv: boolean= true;
  inputValue: string= "";
  @Input("dataList")listofValues: any[] = [];
  

  constructor() { }
}
