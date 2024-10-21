import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http-service';

@Injectable({
  providedIn: 'root',
})
export class DataProtectionService {
  constructor(private httpService: HttpService) {}

  getDataProtection(): Observable<any> {
    return this.httpService.get('dataProtection');
  }

  createDataProtection(dataProtection: any): Observable<any> {
    return this.httpService.post('dataProtection', dataProtection);
  }
}
