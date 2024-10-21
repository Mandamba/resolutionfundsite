import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http-service';

@Injectable({
  providedIn: 'root',
})
export class AnnouncementsService {
  constructor(private httpService: HttpService) {}

  getAnnouncements(): Observable<any> {
    return this.httpService.get('announcements');
  }

  createAnnouncement(announcement: any): Observable<any> {
    return this.httpService.post('announcements', announcement);
  }

  listAnnouncements(params?: any): Observable<any[]> {
    return this.httpService.list('announcements', params);
  }
}
