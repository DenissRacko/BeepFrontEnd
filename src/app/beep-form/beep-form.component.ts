import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Beep } from '../classes/beep';
import { Router, ActivatedRoute } from '@angular/router';
import * as globalVars from '../global';

@Component({
  selector: 'app-beep-form',
  templateUrl: './beep-form.component.html',
  styleUrls: ['./beep-form.component.css']
})
export class BeepFormComponent implements OnInit {
  model: Beep;
  genders: string[] = ["Male", "Female", "Retarded"];
  beepId: number;
  sub: any;
  private http: Http;

  constructor( http:Http, private router:Router, private route: ActivatedRoute  ) { 
      this.http = http;
      this.model = new Beep();
      this.model.EyesCount = 2;    
  }

  onSubmit(form:any) {
    this.http.post('http://localhost:49960/api/values/SaveBeeper', form)
    .subscribe(result => {
        this.router.navigate(['beeps']);
    });
  }
  ngOnInit() {
    this.sub =this.route.params.subscribe(params => {
            this.beepId = +params["id"];
            
            if(this.beepId != null && this.beepId > 0) {
              this.http.get(globalVars.apiUrl + "/api/values/BeeperForm/" + this.beepId)
                    .map(result => <Beep>result.json())
                    .subscribe(result => {
                          this.model = result;
                    });
            }
        });
  }

   ngOnDestroy() {
        this.sub.unsubscribe();
  }
}
