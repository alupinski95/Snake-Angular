import { Component, OnInit } from '@angular/core';
import { ScoreFacade } from 'src/shared/facade/score.facade';
import { Score } from 'src/shared/models/Score';

@Component({
  selector: 'app-score-list',
  templateUrl: './score-list.component.html',
  styleUrls: ['./score-list.component.scss']
})
export class ScoreListComponent implements OnInit {
  public scoreList: Array<Score> = [];
  constructor(public _scoreFacade: ScoreFacade) { }

  ngOnInit(): void {
    this._scoreFacade.getScoreData().subscribe(
      (next: Score[]) => {
        this.scoreList = next;
      }
    );
  }

}
