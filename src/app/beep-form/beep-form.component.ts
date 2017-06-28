import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Beeper } from '../classes/beep-form';
import { Router } from '@angular/router';

@Component({
  selector: 'app-beep-form',
  templateUrl: './beep-form.component.html',
  styleUrls: ['./beep-form.component.css']
})
export class BeepFormComponent implements OnInit {
  model: Beeper;
  genders: string[] = ["Male", "Female", "Retarded"];
  constructor( private http:Http, private router:Router ) { 
    this.model = new Beeper();
    this.model.EyesCount = 2;
  }

  onSubmit(form:any) {
    console.log(form);
    this.http.post('http://localhost:49960/api/values/SaveBeeper', form)
    .subscribe(result => {
        this.router.navigate(['beeps']);
    });
  }
  ngOnInit() {
  }

}
