import { Component } from '@angular/core';
import { Game } from './game';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Games';

  games: Game[] = [
    {
      name: 'GTA IV',
      price: 19.99,
      pressRatingPercentage: 0.98,
      userRating: 8.535647,
      releaseDate: new Date(2008,4,29),
      shopReference: 'ref001gta',
      isAvailable: 'oui',
      tags: new Map<string, string>([
        ['producer', 'take two interactive'],
        ['developer', 'rockstar north']
      ])
    },
    {
      name: 'GTA V',
      price: 44.99,
      pressRatingPercentage: 0.96,
      userRating: 8.214611,
      releaseDate: new Date(2015,4,1),
      shopReference: 'ref002gta',
      isAvailable: 'oui',
      tags: new Map<string, string>([
        ['producer', 'take two interactive'],
        ['developer', 'rockstar north']
      ])
    },
    {
      name: 'CyberPunk 2077',
      price: 11.99,
      pressRatingPercentage: 0.57,
      userRating: 3.8941346,
      releaseDate: new Date(2015,4,1),
      shopReference: 'ref003cyb',
      isAvailable: 'non',
      tags: new Map<string, string>([
        ['producer', 'CD project'],
        ['developer', 'CD projekt red']
      ])
    },
    {
      name: 'Fallout 4',
      price: 24.99,
      pressRatingPercentage: 0.84,
      userRating: 7.5614313,
      releaseDate: new Date(2015,4,1),
      shopReference: 'ref004fal',
      isAvailable: 'oui',
      tags: new Map<string, string>([
        ['producer', 'bethesda softworks'],
        ['developer', 'bethesda game studios']
      ])
    }
  ];  
}