import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
searchText = searchText.toLowerCase();
return items.filter( it => {
      return it.fname.toLowerCase().includes(searchText) | it.lname.toLowerCase().includes(searchText) | it.email.toLowerCase().includes(searchText) | it.date.toLowerCase().includes(searchText)| (it.id == (searchText) )   ;
    });
   }
}
