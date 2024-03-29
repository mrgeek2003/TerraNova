import { Component } from '@angular/core';
import { TerraBotService } from '../../service/TerraBot/terra-bot.service';
@Component({
  selector: 'app-terra-bot',
  templateUrl: './terra-bot.component.html',
  styleUrl: './terra-bot.component.css',
})
export class TerraBotComponent {
  messages: string[] = [];
  userInput: string = '';
  constructor(private TerraBotService: TerraBotService) {}
  sendMessage(): void {
    if (this.userInput.trim() === '') return;

    this.messages.push(this.userInput);
    this.TerraBotService.sendMessage(this.userInput).subscribe((response) => {
      this.messages.push(response.message);
      console.log(response.message)
    });

    this.userInput = '';
  }
}
