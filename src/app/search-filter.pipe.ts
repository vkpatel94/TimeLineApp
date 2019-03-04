import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchfilter'
})

export class SearchFilterPipe implements PipeTransform {

    transform(items: any[], searchText: string): any[] {
        if(!items) return [];
        if(!searchText) return items;

        searchText = searchText.toLowerCase();
        return items.filter( obj => {
          let word = obj.title;
          return word.toLowerCase().includes(searchText);
        });
    }

}