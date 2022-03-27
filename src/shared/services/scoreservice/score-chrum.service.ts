import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Score } from 'src/shared/models/Score';

@Injectable({
  providedIn: 'root'
})
export class ScoreChrumService {
  private apiUrl:any  = (endpoint:string) => {return `https://scores.chrum.it/${endpoint}`};
  private getScoreUrl:string  ="scores";
  private postScoreUrl:string  =this.getScoreUrl+"/";
  private checkTokenUrl:string  ="check-token";

  private httpOptions = {
    headers: new HttpHeaders({
      "Accept": 'application/json'
    })
  };

  private options ={

  }

  constructor(private _http: HttpClient) { }


  private handleError(error:any){
    console.log(error);
    return of(error);
  }


  getScore(){
    return this._http
      .get<Score>(this.apiUrl(this.getScoreUrl), this.httpOptions)
      .pipe(
        catchError(err => {
          throw 'Error while getting scores' + err.message;
        })
      );
  }
  postScore(){
    return this._http
    .post<Score>(this.apiUrl(this.postScoreUrl), this.httpOptions)
    .pipe(
      catchError(err => {
        throw 'Error while posting scores' + err.message;
      })
    );
  }
  checkToken(){
    return this._http
    .post<JSON>(this.apiUrl(this.checkTokenUrl), this.httpOptions)
    .pipe(
      catchError(err => {
        throw 'Error while chceck token' + err.message;
      })
    );
  }
}
