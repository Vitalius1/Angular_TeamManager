import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class PlayerService {
  players = [];
  playerObserver = new BehaviorSubject(this.players);
  title = ""
  titleObserver = new BehaviorSubject(this.title);

  constructor(private _http: Http) { }

  createPlayer(player) {
    console.log("SERVICE createPlayer() reached");
    this._http.post(`/players.json`, player)
      .subscribe(data => {
        this.players = data.json();
        this.playerObserver.next(this.players)
      }, (err) => {
        console.log("CREATE PLAYER ERROR", err);
      }
      )
  }

  deletePlayer(id) {
    console.log("SERVICE deletePlayer() reached");
    this._http.delete(`players.json/${id}`)
      .subscribe(data => {
        this.players = data.json();
        this.playerObserver.next(this.players)
      }, (err) => {
        console.log("DELETE PLAYER ERROR", err);
      }
      )
  }

  getAll() {
    console.log("SERVICE getAll() reached");
    this._http.get(`players.json`)
      .subscribe(data => {
        this.players = data.json();
        this.playerObserver.next(this.players);
      }, (err) => {
        console.log("GET ALL PLAYERS ERROR", err);
      }
      )
  }

  updatePlayer(player) {
    console.log("SERVICE updatePlayer() reached", player);
    this._http.put(`players.json`, player)
      .subscribe(data => {
        console.log("we go to put", data)
        // this.players = data.json();
        // this.playerObserver.next(this.players);
      }, (err) => {
        console.log("UPDATE PLAYER ERROR", err);
      }
      )
  }
}

