import { Pipe, PipeTransform } from '@angular/core';
import { Score } from 'src/shared/models/Score';

@Pipe({
  name: 'filterByUnicode'
})
export class FilterByUnicodePipe implements PipeTransform {

  transform(items: Score[], isGlobal: boolean): Score[] {
    if (!items || !isGlobal) {
      return items;
    }
    return items.filter((x:Score)=>{
      return x.name.match("⁤");
    });
  }

}
