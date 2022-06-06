import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-item',
  templateUrl: './file-item.component.html',
  styleUrls: ['./file-item.component.css']
})
export class FileItemComponent implements OnInit {

  @Input() file:{ showValue?: boolean, filePath?: string, name?: string, parentFile?: string }={};

  constructor() { }

  ngOnInit(): void {
  }

}
