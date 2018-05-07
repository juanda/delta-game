import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { BootingComponent } from './booting/booting.component';
import { InitComponent } from './init/init.component';
import { GameComponent } from './game/game.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { SoundComponent } from './sound/sound.component';


@NgModule({
  declarations: [
    AppComponent,
    ScoreboardComponent,
    BootingComponent,
    InitComponent,
    GameComponent,
    InstructionsComponent,
    SoundComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
