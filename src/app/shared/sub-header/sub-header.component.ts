import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'clinica-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss'],
})
export class SubHeaderComponent implements OnInit {

  @Input('showWelcome') showWelcome: boolean = false;

  constructor() { }

  ngOnInit() { }

}
