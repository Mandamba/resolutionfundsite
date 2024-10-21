import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http-service';

@Injectable({
  providedIn: 'root',
})
export class FundService {
  constructor(private httpService: HttpService) {}

  getFund(): Observable<any> {
    return this.httpService.get('fund');
  }

  createFund(fund: any): Observable<any> {
    return this.httpService.post('fund', fund);
  }
}
