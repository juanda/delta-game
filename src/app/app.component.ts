import "fpsmeter";
import { Component } from "@angular/core";
import { RunOptions } from "./interfaces/run_options";
import { config } from "./config";
import { Engine } from "./elements/engine";
import { Player } from "./elements/player";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";

  ngOnInit() {
    console.log("iniciando app");    

    let engine = new Engine()
    let player = new Player()
    
    let options: RunOptions = {
      fps: 30,
      fpsmeter: new FPSMeter(document.getElementById("delta"), config.fpsmeter),
      update: (dt: number) => {},
      render: (dt: number) => {}
    };

    this.run(options);
  }

  run(options: RunOptions) {
    var now,
      dt = 0,
      last = window.performance.now(),
      step = 1 / options.fps,
      update = options.update,
      render = options.render,
      fpsmeter = options.fpsmeter;

    function frame() {
      fpsmeter.tickStart();
      now = window.performance.now();
      dt = dt + Math.min(1, (now - last) / 1000);
      while (dt > step) {
        dt = dt - step;
        update(step);
      }
      render(dt);
      last = now;
      fpsmeter.tick();
      requestAnimationFrame(frame);
    }

    frame();
  }
}
