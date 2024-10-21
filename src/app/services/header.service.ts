import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http-service';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  constructor(private httpService: HttpService) {}

  getHeader(): Observable<any> {
    return this.httpService.get('header');
  }

  createHeader(header: any): Observable<any> {
    return this.httpService.post('header', header);
  }
}
