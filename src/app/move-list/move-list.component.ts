import { Component, HostListener, Input, OnInit } from '@angular/core';
import { GameAction } from 'src/shared/enums/gameActionsEnum';
import { GamePlayEventModel } from 'src/shared/models/GamePlayEvent';

interface FilterElement {
  key: string,
  value: string
}

@Component({
  selector: 'app-move-list',
  templateUrl: './move-list.component.html',
  styleUrls: ['./move-list.component.scss']
})
export class MoveListComponent implements OnInit {
  public selectedFilter: string = "";

  public filterBy: FilterElement;
  public filters: Array<FilterElement>;
  public orderAsc: boolean = true;

  @Input() listdata: Array<GamePlayEventModel>;
  constructor() {
    this.createFilters();
  }


  private createFilters() {
    this.filters = Object.entries(GameAction)
      .map(([key, value]) => ({ key, value }));
    this.filters.splice(0, 0, { key: 'All', value: '' });
    this.filterBy = this.filters[0];
  }
  onChange(newValue: any) {
    this.selectedFilter = newValue;
  }
  ngOnInit(): void {
  }


}
