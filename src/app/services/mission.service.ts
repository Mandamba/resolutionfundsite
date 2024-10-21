 import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http-service';

@Injectable({
  providedIn: 'root',
})
export class MissionService {
  constructor(private httpService: HttpService) {}

  getMission(): Observable<any> {
    return this.httpService.get('mission');
  }

  createMission(mission: any): Observable<any> {
    return this.httpService.post('mission', mission);
  }
}
