import { Component } from "@angular/core";

//===============================================================================================
// CONSTANTS
//===============================================================================================

const FPS = 60,
  WIDTH = 1024,
  HEIGHT = 768,
  RATIO = WIDTH / HEIGHT,
  HITBOX = 5,
  COOLDOWN = 15,
  HSPEED = 200,
  VSPEED = 300,
  PLAYER = { X: 50, Y: 150, W: 56, H: 28, BULLET_SPEED: 1000 },
  ALIEN = { W: 32, H: 32, BULLET_SPEED: { MIN: 400, MAX: 800 } },
  ROCK = { W: 256, H: 128, DX: -500 };

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";
}
