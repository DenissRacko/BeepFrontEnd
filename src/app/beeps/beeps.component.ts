import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import * as globalVars from '../global';
import { Beep, BeepViewModel } from '../classes/beep'

@Component({
  selector: 'app-beeps',
  templateUrl: './beeps.component.html',
  styleUrls: ['./beeps.component.css', './beeps.component.scss']
})

export class BeepsComponent implements OnInit {
  beepTitle: string;
  beepsCount: number;
  beeps: Array<BeepViewModel>;
  private http: Http;

  constructor(http: Http) { 
    this.http = http;
    http.get(globalVars.apiUrl + "/api/values/BeepersList")
    .map(result => <Array<BeepViewModel>>result.json())
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
     var card = event.target.parentNode.parentNode.parentNode.parentNode;
     card.classList.add("faded");
     setTimeout(() => {
        card.classList.add("hidden");
     }, 500);
  }

  expandRow(beep: BeepViewModel) {
    if(beep.Expanded) {
      beep.Expanded = false;
    }
    else {
      beep.Expanded = true;
    }    
  }

  ngOnInit() {
  }
}
