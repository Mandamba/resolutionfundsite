import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http-service';

@Injectable({
  providedIn: 'root',
})
export class FrequentQuestionsService {
  constructor(private httpService: HttpService) {}

  getFrequentQuestions(): Observable<any[]> {
    return this.httpService.get('frequentQuestions');
  }

  createFrequentQuestion(question: any): Observable<any> {
    return this.httpService.post('frequentQuestions', question);
  }
}
