import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import * as globalVars from '../global';

@Component({
  selector: 'app-beeps',
  templateUrl: './beeps.component.html',
  styleUrls: ['./beeps.component.css']
})

//TODO: Fetch data from local api
export class BeepsComponent implements OnInit {
  public beeps: Array<Beep>;
  constructor(http: Http) { 
    http.get(globalVars.apiUrl + "/api/values/BeepersList").subscribe(result => {
            this.beeps = result.json();
        });
  }

  ngOnInit() {
  }

}

interface Beep {
  Id: number;
  Name: string;
  DateOfBirth: Date;
  Gender: string;
  EyesCount: number;
}