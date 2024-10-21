import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http-service';

@Injectable({
  providedIn: 'root',
})
export class FooterService {
  constructor(private httpService: HttpService) {}

  getFooter(): Observable<any> {
    return this.httpService.get('footer');
  }

  createFooter(footer: any): Observable<any> {
    return this.httpService.post('footer', footer);
  }
}
