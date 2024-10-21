// src/app/core/http.service.ts
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  protected baseUrl = environment.apiUrl;

  constructor(protected http: HttpClient) {}

  get<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${endpoint}`);
  }

  post<T>(endpoint: string, data: T): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/${endpoint}`, data);
  }

  list<T>(endpoint: string, params?: any): Observable<T[]> {
    return this.http.get<T[]>(`${this.baseUrl}/${endpoint}`, { params });
  }
}
