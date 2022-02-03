import { Pipe, PipeTransform } from '@angular/core';
import { GamePlayEventModel } from 'src/shared/models/GamePlayEvent';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(items: Array<GamePlayEventModel>, orderBy: boolean): any {
    debugger
    if (!items) {
      return items;
    }
    return items.sort((a, b) => {
      if (orderBy) {
        return a.instructionDate - b.instructionDate;
      } else return b.instructionDate - a.instructionDate;
    });
  }

}
