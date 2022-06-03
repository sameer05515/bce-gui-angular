import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-search',
  templateUrl: './file-search.component.html',
  styleUrls: ['./file-search.component.css']
})
export class FileSearchComponent implements OnInit {

  public timerInterval = 300;

  public choices = [{
    id: "choice1",
    name: "C:\Prem\data\others\self\comics"
  },
  { id: "choice2", name: "/home/premendra/Desktop" },
  { id: "choice3", name: "/home/premendra/git" }
  ];

  public fruits = [
    { name: ".pdf", checked: true },
    { name: ".mp3", checked: false },
    { name: ".mp4", checked: false },
    { name: ".exe", checked: false },
    { name: ".zip", checked: false },
    { name: ".png", checked: false },
    { name: ".jpeg", checked: false },
    { name: ".jpg", checked: false },
    { name: ".jar", checked: false },
    { name: ".war", checked: false },
    { name: ".ear", checked: false },
    { name: ".rar", checked: false },
    { name: ".epub", checked: false },
    { name: ".txt", checked: false },
    { name: ".sql", checked: false },
    { name: ".db", checked: false },
    { name: ".sys", checked: false }
    // ".mp3",
    // ".mp4",
    // ".exe",
    // ".zip",
    // ".png",
    // ".jpeg",
    // ".jpg",
    // ".jar",
    // ".war",
    // ".ear",
    // ".rar",
    // ".epub",
    // ".txt",
    // ".sql",
    // ".db",
    // ".sys"
  ];
  //$scope.checked_fruits = [".pdf", ".mp3"];
  public checked_fruits = [".pdf"];

  public addNewChoice = () => {
    var newItemNo = this.choices.length + 1;
    this.choices.push({
      id: "choice" + newItemNo,
      name: ""
    });
  };

  public removeChoice = () => {
    var lastItem = this.choices.length - 1;
    this.choices.splice(lastItem);
  };

  public loadMultiResult = () => {
    for (const choice of this.choices) {
      console.log(choice.name);
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
