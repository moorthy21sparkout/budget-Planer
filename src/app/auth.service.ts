import { Injectable } from '@angular/core';
import {of , Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(credentials: any): Observable<any> {
    return of(true); 
  }

  regsister(credentials: any): Observable<any> {
    return of(true);
  }
  
}
