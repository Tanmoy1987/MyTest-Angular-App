import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(_listOfObj?: any[], _searchValue?: string): string[] {
    let filteredData: string[] = [];   
    if(!_searchValue || !_listOfObj)
      return [];
         
    _listOfObj.filter(y=> y.name.toLowerCase().startsWith(_searchValue.toLowerCase()))?.forEach(y => filteredData.push(y.name));

    if(filteredData.length == 0) 
      return [""]

    return filteredData;
  }

}
