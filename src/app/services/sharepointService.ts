// src/app/sharepoint.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SharepointService {
  private baseUrl = "https://bnaao.sharepoint.com/sites/SiteFundoDeResolucao/_api/web/lists/getbytitle('Comunicados')/items";

  constructor(private http: HttpClient) { }

  fetchAnouncements(): Observable<any> {
    const headers = new HttpHeaders({
      'Accept': 'application/json; odata=verbose'
    });

    return this.http.get<any>(this.baseUrl, { headers }).pipe(
      catchError(error => {
        console.error('Erro ao buscar itens:', error);
        return throwError(error);
      })
    );
  }
}
