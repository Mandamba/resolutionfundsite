import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http-service';

@Injectable({
  providedIn: 'root',
})
export class OurServicesService {
  constructor(private httpService: HttpService) {}

  getOurServices(): Observable<any[]> {
    return this.httpService.get('ourServices');
  }

  createOurService(service: any): Observable<any> {
    return this.httpService.post('ourServices', service);
  }
}
