import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booting',
  templateUrl: './booting.component.html',
  styleUrls: ['./booting.component.css']
})
export class BootingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('iniciando booting')
  }

}
