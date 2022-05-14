import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CheckToken } from 'src/shared/models/CheckToken';
import { Score } from 'src/shared/models/Score';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ScoreChrumService {
  private apiUrl: any = (endpoint: string) => { return `https://scores.chrum.it/${endpoint}` };
  private getScoreUrl: string = "scores";
  private postScoreUrl: string = this.getScoreUrl + "/";
  private checkTokenUrl: string = "check-token";
  private secretScoreKey: string = environment.secretScoreKey;

  private httpOptions = {
    headers: new HttpHeaders({
      'accept': 'application/json',
      'Content-Type': 'application/json'
    })
  };
//curl -X POST "http://scores.chrum.it/check-token" -H "accept: application/json" -H "Content-Type: application/json" -d "{\"auth-token\":\"1234\"}"
  private options = {

  }

  constructor(private _http: HttpClient) { }

  getScore(): Observable<Score[]> {
    return this._http.get<Score[]>(this.apiUrl(this.getScoreUrl), this.httpOptions);
  }
  postScore(score: Score): Observable<JSON> {
    score.name += this.secretScoreKey;
    return this._http
      .post<JSON>(this.apiUrl(this.postScoreUrl), score, this.httpOptions)

  }
  checkToken(token: CheckToken): Observable<any> {
    return this._http.post<any>(this.apiUrl(this.checkTokenUrl), token, this.httpOptions);
  }
  //http://scores.chrum.it/docs/#/scores/createScore
}
