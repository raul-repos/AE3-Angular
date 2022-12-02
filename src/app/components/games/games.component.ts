import { Component } from '@angular/core';
import { GAMES } from '../../games-data';
import { Game } from '../../Game';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent {
  games: Game[] = GAMES

}
