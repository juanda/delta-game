import { StateMachine, StateMachineConfig } from "javascript-state-machine";

export class Engine {
  fsm: StateMachine

  constructor() {
    
  }

  isBooting() {
    return this.fsm.is("booting") || this.fsm.is("none");
  }

  isTitle() {
    return this.fsm.is("title");
  }

  isPreparing() {
    return this.fsm.is("preparing");
  }

  isPlaying() {
    return this.fsm.is("playing");
  }

  start() {}

  quit() {}
}
