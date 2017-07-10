import { Component, OnInit, Input } from '@angular/core';
import { Beep, BeepViewModel } from '../classes/beep'

@Component({
  selector: 'app-beep-inline',
  templateUrl: './beep-inline.component.html',
  styleUrls: ['./beep-inline.component.css']
})
export class BeepInlineComponent implements OnInit {
  @Input() model: Beep;

  constructor() { }

  ngOnInit() {
  }

}
