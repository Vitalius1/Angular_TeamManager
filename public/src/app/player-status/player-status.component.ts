import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player-status',
  templateUrl: './player-status.component.html',
  styleUrls: ['./player-status.component.css']
})
export class PlayerStatusComponent implements OnInit {
  title = "Game 1"
  constructor(private _playerService: PlayerService) {
    this._playerService.titleObserver.subscribe(title => {
      this.title = title;
    })
  }

  ngOnInit() {
  }

}
