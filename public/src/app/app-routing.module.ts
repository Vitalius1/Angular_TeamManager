import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerComponent } from './player/player.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { PlayerStatusComponent } from './player-status/player-status.component';
import { GameComponent } from './game/game.component';

const routes: Routes = [
  { path: '', redirectTo: 'players/list', pathMatch: 'full' },
  { path: 'players', component: PlayerComponent, children: [
      { path: 'list', component: PlayerListComponent },
      { path: 'addplayer', component: AddPlayerComponent }
    ]},
    { path: 'status', component: PlayerStatusComponent, children: [
      { path: 'game/:id', component: GameComponent }
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
