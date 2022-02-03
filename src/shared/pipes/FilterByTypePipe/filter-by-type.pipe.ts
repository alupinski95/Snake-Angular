import { Pipe, PipeTransform } from '@angular/core';
import { GamePlayEventModel } from '../../models/GamePlayEvent';

@Pipe({
  name: 'filterByType'
})
export class FilterByTypePipe implements PipeTransform {
  transform(items: Array<GamePlayEventModel>, filter: string): any {
    if (!items || !filter) {
      return items;
    }
    return items.filter(item => item.instructionName == filter);
  }
}
