import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import * as globalVars from '../global';
import { Beep } from '../classes/beep'

@Component({
  selector: 'app-beeps',
  templateUrl: './beeps.component.html',
  styleUrls: ['./beeps.component.css']
})

export class BeepsComponent implements OnInit {
  beepTitle: string;
  beepsCount: number;
  beeps: Array<Beep>;
  private http: Http;

  constructor(http: Http) { 
    this.http = http;
    http.get(globalVars.apiUrl + "/api/values/BeepersList")
    .map(result => <Array<Beep>>result.json())
    .subscribe(result => {
            this.beeps = result;
            this.beepsCount = result.length;
            this.beepTitle = "Beeps here";
        });
  }

  removeRow(event: any, id: number) {
     this.http.delete(globalVars.apiUrl + "/api/values/DeleteBeeper/" + id).subscribe(result => {
       if(result.text() == "success") {
         this.beepsCount--;
       }      
     });
     var row = event.target.parentNode.parentNode.parentNode;
     row.classList.add("faded");
     setTimeout(() => {
        row.classList.add("hidden");
     }, 500);


  }

  ngOnInit() {
  }
}
