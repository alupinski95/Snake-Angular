import { Component, OnInit } from '@angular/core';
import { ScoreFacade } from 'src/shared/facade/score.facade';

@Component({
  selector: 'app-score-list',
  templateUrl: './score-list.component.html',
  styleUrls: ['./score-list.component.scss']
})
export class ScoreListComponent implements OnInit {

  constructor(public _scoreFacade: ScoreFacade) { }

  ngOnInit(): void {
    this._scoreFacade.getScoreData();
  }

}
