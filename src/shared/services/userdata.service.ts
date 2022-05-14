import { Injectable } from '@angular/core';
import { CheckToken } from '../models/CheckToken';
import { Score } from '../models/Score';
import { ScoreChrumService } from './scoreservice/score-chrum.service';

@Injectable({
    providedIn: 'root'
})
export class UserdataService {
    public userName: string = '';
    public userEmail: string = '';
    public token: number;


    constructor() { }

}
