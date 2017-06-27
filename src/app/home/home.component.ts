import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public title = "Home title";

  constructor() { }

  public updateTitle(event: any) {
    if(event.target.value.length == 0) {
      this.title =  "Home title";
    }
    else {
      this.title = event.target.value;
    }    
  }
  ngOnInit() {
  }

}
