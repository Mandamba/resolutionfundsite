import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http-service';

@Injectable({
  providedIn: 'root',
})
export class BannerService {
  constructor(private httpService: HttpService) {}

  getBanner(): Observable<any> {
    return this.httpService.get('banner');
  }

  createBanner(banner: any): Observable<any> {
    return this.httpService.post('banner', banner);
  }
}
