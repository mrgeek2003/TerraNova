import { Component } from '@angular/core';
import { TerraBotService } from '../../service/TerraBot/terra-bot.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  userInput: string = '';
  botResponse: string = '';

  constructor(private terraBot: TerraBotService) {}

  sendMessage() {
    if (this.userInput.trim() === '') return;
    
    this.terraBot.sendMessage(this.userInput)
      .subscribe((response: any) => {
        this.botResponse = response.text;
        this.userInput = ''; // Clear input after sending message
      }, (error) => {
        console.error('Error sending message to bot:', error);
      });
  }
}
