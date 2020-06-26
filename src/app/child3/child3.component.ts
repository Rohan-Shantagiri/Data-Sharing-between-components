import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  message: string = "Hello World"

  @Output() messageEvent = new EventEmitter<string>();


  sendMessage() {
    this.messageEvent.emit(this.message)
  }
}
