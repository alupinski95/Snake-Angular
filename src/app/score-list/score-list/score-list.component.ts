import { Component, OnInit } from '@angular/core';
import { ScoreChrumService } from 'src/shared/services/scoreservice/score-chrum.service';

@Component({
  selector: 'app-score-list',
  templateUrl: './score-list.component.html',
  styleUrls: ['./score-list.component.scss']
})
export class ScoreListComponent implements OnInit {

  constructor(private _scoreChrumService:ScoreChrumService) { }

  ngOnInit(): void {
    this._scoreChrumService.getScore().subscribe(
      res => {
        console.log(res);
      }
    )
  }

}
