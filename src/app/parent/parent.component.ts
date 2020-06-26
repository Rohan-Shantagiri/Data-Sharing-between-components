import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }
  // Data Passing From Parent to child Using @Input
  parentMessage = "Hello World";

  ngOnInit(): void {
  }

}
