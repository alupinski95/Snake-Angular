import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  public userName: string = '';
  public userEmail: string = '';
  constructor() { }
}
