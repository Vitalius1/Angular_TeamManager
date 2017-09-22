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
        if(parseInt(params.get('id')) === 1){
          this.g = "game1";
          this.title = "Game 1";
          console.log(this.g);
        } else if(parseInt(params.get('id')) === 2){
          this.g = "game2";
          this.title = "Game 2";
          console.log(this.g);
        } else if(parseInt(params.get('id')) === 3){
          this.g = "game3";
          this.title = "Game 3";
          console.log(this.g);
        }
      })
  }

  ngOnInit() {
  }
  play(p) {
    console.log(`Player: ${p.name} decided to play`);
    if(this.g === "game1"){
      p.game1 = "playing";
    } else if(this.g === "game2"){
      p.game2 = "playing"
    } else if(this.g === "game3"){
      p.game3 = "playing"
    }

  }
  noPlay(p) {
    console.log(`Player: ${p.name} decided not to play`);
  }
  undecided(p) {
    console.log(`Player: ${p.name} is undecided`);
  }

}
