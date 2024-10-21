import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http-service';

@Injectable({
  providedIn: 'root',
})
export class LegislationService {
  constructor(private httpService: HttpService) {}

  getLegislation(): Observable<any> {
    return this.httpService.get('legislation');
  }

  createLegislation(legislation: any): Observable<any> {
    return this.httpService.post('legislation', legislation);
  }
}
