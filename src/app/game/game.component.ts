import { Component, OnInit } from "@angular/core";
import { key } from "./key"


@Component({
  selector: "app-game",
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.css"]
})
export class GameComponent implements OnInit {
  static key = key;

  constructor() {}

  ngOnInit() {
    
  }
}
