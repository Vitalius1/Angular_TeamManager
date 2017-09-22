import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  player: Player = new Player();
  
  constructor(private _playerService: PlayerService, private _router: Router) { }

  onSubmit(){
    console.log("COMPONENT SUBMIT reached",this.player);
    if(!this.player.position){
      this.player.position = "Any Position";
    }
    this._playerService.createPlayer(this.player);
    this._router.navigate(['players','list']);
  }

  ngOnInit() {
  }

}
