import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  players = [];
  constructor(private _playerService: PlayerService) {
    this._playerService.playerObserver.subscribe(players => {
      this.players = players;
    })
    this._playerService.getAll();
  }
  ngOnInit() {
  }

  delete(id){
    console.log("DELETE rechead with id: ", id);
    this._playerService.deletePlayer(id);
  }
}
