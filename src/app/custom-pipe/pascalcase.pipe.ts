import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pascal'
})
export class PascalCasePipe implements PipeTransform {

  transform(value?: string): string {
    if(!value)
      return "";
    let formattedStr= "";
    let words = value.split(' ');
    let keywords= ['the','of','in', 'on', 'up', 'and', 'but','to'];
    for(let i=0; i < words.length; i++){
      if(i > 0 && keywords.includes(words[i].toLowerCase())) {
        formattedStr += words[i].toLowerCase() + ' ';
      }
      else {
        formattedStr += words[i].substr(0,1).toUpperCase() + words[i].substr(1, words[i].length).toLowerCase() + ' ';
      }
    }
    return formattedStr;
  }

}
