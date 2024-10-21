import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http-service';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private httpService: HttpService) {}

  getContact(): Observable<any> {
    return this.httpService.get('contact');
  }

  createContact(contact: any): Observable<any> {
    return this.httpService.post('contact', contact);
  }
}
