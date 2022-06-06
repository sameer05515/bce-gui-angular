import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-file-search',
  templateUrl: './file-search.component.html',
  styleUrls: ['./file-search.component.css']
})
export class FileSearchComponent implements OnInit {

  public timerInterval = 300;

  public loadingMessage: string[] = [];
  public errorMessage: { message: string, type: string }[] = [];
  public fileNames: { showValue?: boolean, filePath: string, name: string, parentFile: string }[] = [];

  public choices: { id: string, name: string }[] = [{
    id: "choice1",
    name: "C:\\Prem\\data\\others\\self\\comics"
  },
  { id: "choice2", name: "/home/premendra/Desktop" },
  { id: "choice3", name: "/home/premendra/git" }
  ];

  public fruits: { name: string, checked: boolean }[] = [
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
  ];

  public checked_fruits: string[] = [''];

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
    this.checked_fruits = this.fruits.filter(fruit => fruit.checked).map(fruit => fruit.name);
    this.loadingMessage = [];
    this.errorMessage = [];
    this.fileNames = [];
    for (const choice of this.choices) {
      console.log(this.checked_fruits);
      this.loadResult(this.checked_fruits, choice.name)
    }
  };

  private loadResult = (checked_fruits: string[], directory: string) => {
    this.loadingMessage.push("Loading data....");
    let obj: { message: string, type: string } = {
      message: "Starting search for : " + directory,
      type: "load"
    };
    this.errorMessage.push(obj);
    console.log("Starting search for : " + directory);
    this.http
      .post(
        'http://127.0.0.1:8090/filesearch/file-search',
        { fileName: directory, extentions: checked_fruits }
      )
      .subscribe((responseData: { [key: string]: any; }) => {
        for (const key in responseData) {
          console.log(key);
        }
        let data = [];
        if (responseData['data']) {
          data = responseData['data'];
          for (const iterator of data) {
            iterator.showValue = true;
            this.fileNames.push(iterator)
          }
        }
        this.errorMessage.push({
          message: "Successfully got " + data.length + " result for " + directory,
          type: "success"
        });
        // console.log(responseData);
      },(responseData: { [key: string]: any; }) =>{
        this.errorMessage.push({
          message: "Error while getting result for " + directory,
          type: "fail"
        });
        console.log(responseData);
      });
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

}
