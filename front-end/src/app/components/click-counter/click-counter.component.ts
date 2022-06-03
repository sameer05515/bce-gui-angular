import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-counter',
  templateUrl: './click-counter.component.html',
  styleUrls: ['./click-counter.component.css']  
})
export class ClickCounterComponent implements OnInit {

  countResult="";

  private count = 0;
  private thousandCount=0;
  private lacCount=0;
  private croreCount=0;
  private arabCount=0;

  onDivClick = ()=>{
    this.count += 1;
  if(this.count>=1000){	  
	  this.thousandCount += 1;
	  if(this.thousandCount>=100){
		  this.lacCount+=1;
		  this.thousandCount=(this.thousandCount-100);
	  }
	  if(this.lacCount>=100){
		  this.croreCount+=1;
		  this.lacCount=(this.lacCount-100);
	  }
	  if(this.croreCount>=100){
		  this.arabCount+=1;
		  this.croreCount=(this.croreCount-100);
	  }
	  this.count=(this.count - 1000);
  }

  this.countResult=((this.arabCount>0)? this.arabCount +" Arab , ":" ")
  + ((this.croreCount>0)? this.croreCount +" Crore , ":" ")
  + ((this.lacCount>0)? this.lacCount +" Lac , ":" ")
  + ((this.thousandCount>0)? this.thousandCount +" Thousand , ":" ") + 
  ((this.count>0)?this.count:" ");

}

  constructor() { }

  ngOnInit(): void {
  }

}
