import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TerraBotService {

  private apiUrl = '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';
  constructor(private http:HttpClient) { }
  sendMessage(message:string):Observable<any>{
    return this.http.post<any>(this.apiUrl, { message });
  }
}
/*

// chatbot.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  private apiUrl = 'YOUR_CHATBOT_API_ENDPOINT';

  constructor(private http: HttpClient) { }

  sendMessage(message: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { message });
  }
}
*/