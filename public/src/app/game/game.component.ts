import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  players = [];
  g = ""
  title = ""
  constructor(private _playerService: PlayerService, private _route: ActivatedRoute) {
    this._playerService.playerObserver.subscribe(players => {
      this.players = players;
    })
    this._playerService.getAll();
    this._route.paramMap
      .subscribe(params => {
        if (parseInt(params.get('id')) === 1) {
          this.g = "game1";
          this.title = "Game 1";
          this._playerService.titleObserver.next(this.title)
        } else if (parseInt(params.get('id')) === 2) {
          this.g = "game2";
          this.title = "Game 2";
          this._playerService.titleObserver.next(this.title)
        } else if (parseInt(params.get('id')) === 3) {
          this.g = "game3";
          this.title = "Game 3";
          this._playerService.titleObserver.next(this.title)
        }
      })
  }

  ngOnInit() {
  }
  play(p) {
    console.log(`Player: ${p.name} decided to play`);
    if (this.g === "game1") {
      p.game1 = "playing";
      this._playerService.updatePlayer(p);
    } else if (this.g === "game2") {
      p.game2 = "playing"
      this._playerService.updatePlayer(p);
    } else if (this.g === "game3") {
      p.game3 = "playing"
      this._playerService.updatePlayer(p);
    }

  }
  noPlay(p) {
    console.log(`Player: ${p.name} decided not to play`);
    if (this.g === "game1") {
      p.game1 = "notplaying";
      this._playerService.updatePlayer(p);
    } else if (this.g === "game2") {
      p.game2 = "notplaying"
      this._playerService.updatePlayer(p);
    } else if (this.g === "game3") {
      p.game3 = "notplaying"
      this._playerService.updatePlayer(p);
    }
  }

  undecided(p) {
    console.log(`Player: ${p.name} is undecided`);
    if (this.g === "game1") {
      p.game1 = "undecided";
      this._playerService.updatePlayer(p);
    } else if (this.g === "game2") {
      p.game2 = "undecided"
      this._playerService.updatePlayer(p);
    } else if (this.g === "game3") {
      p.game3 = "undecided"
      this._playerService.updatePlayer(p);
    }
  }

}
