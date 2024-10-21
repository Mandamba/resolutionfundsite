import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http-service';

@Injectable({
  providedIn: 'root',
})
export class SuperVisionService {
  constructor(private httpService: HttpService) {}

  getSupervisions(): Observable<any[]> {
    return this.httpService.get('supervision');
  }

  createSupervision(service: any): Observable<any> {
    return this.httpService.post('supervision', service);
  }
}
