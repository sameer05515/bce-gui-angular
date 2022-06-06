import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-display',
  templateUrl: './message-display.component.html',
  styleUrls: ['./message-display.component.css']
})
export class MessageDisplayComponent implements OnInit {

  @Input('msg') messageObject:{ message?: string, type?: string }={};

  constructor() { }

  ngOnInit(): void {
  }

}
