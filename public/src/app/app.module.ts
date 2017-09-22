import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { PlayerStatusComponent } from './player-status/player-status.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    AddPlayerComponent,
    PlayerStatusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
