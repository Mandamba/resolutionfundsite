 import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http-service';

@Injectable({
  providedIn: 'root',
})
export class OrganicFunctionalityService {
  constructor(private httpService: HttpService) {}

  getOrganicFunctionality(): Observable<any> {
    return this.httpService.get('organicFunctionality');
  }

  createOrganicFunctionality(functionality: any): Observable<any> {
    return this.httpService.post('organicFunctionality', functionality);
  }
}
