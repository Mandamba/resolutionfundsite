import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http-service';

@Injectable({
  providedIn: 'root',
})
export class FinancialResourcesService {
  constructor(private httpService: HttpService) {}

  getFinancialResources(): Observable<any> {
    return this.httpService.get('financialResources');
  }

  createFinancialResource(financialResource: any): Observable<any> {
    return this.httpService.post('financialResources', financialResource);
  }
}
