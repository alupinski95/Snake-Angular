import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { CheckToken } from '../models/CheckToken';
import { Score } from '../models/Score';
import { Succes } from '../models/Succes';
import { ScoreChrumService } from '../services/scoreservice/score-chrum.service';

@Injectable({
    providedIn: 'root'
})
export class ScoreFacade {

    public scoreList: Array<Score> = [];
    public isLoading: boolean = false;
    public isTokenValid: boolean = false;

    constructor(private scoreChrumService: ScoreChrumService) { }

    public getScoreData() {
        this.isLoading = true;
        this.scoreChrumService.getScore()
            .pipe(
                tap(
                    {
                        next: (data: Score[]) => {
                            this.scoreList = data;
                            this.isLoading = false;
                        },
                        error: (error) => {
                            console.log(error);
                            this.isLoading = false;
                        }
                    }
                )

            );
    }

    public checkToken(token: CheckToken) {
        this.isLoading = true;

        return this.scoreChrumService.checkToken(token)
            .pipe(
                tap(
                    {
                        next: (data: Succes) => {
                            this.isLoading = false;
                        },
                        error: (error) => {
                            console.log(error);
                            this.isLoading = false;
                        },
                        complete: () => {
                            this.isLoading = false;
                        }
                    }
                )
            );
    }

    public postScore(score: Score) {
        this.scoreChrumService.postScore(score)
            .pipe(
                tap(
                    {
                        next: (data: JSON) => {
                            this.isLoading = false;
                        },
                        error: (error) => {
                            console.log(error);
                            this.isLoading = false;
                        }
                    }
                )
            );
    }
}
