 import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http-service';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private httpService: HttpService) {}

  getHome(): Observable<any> {
    return this.httpService.get('home');
  }

  createHome(home: any): Observable<any> {
    return this.httpService.post('home', home);
  }
}
