import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TerraBotService {
  private botEndpoint = 'https://your-botpress-endpoint.com/api/v1/bots/your-bot-id/webchat/messages';

  constructor(private http: HttpClient) {}

  sendMessage(message: string) {
    const body = {
      type: 'text',
      text: message
    };

    return this.http.post(this.botEndpoint, body);
  }
}
