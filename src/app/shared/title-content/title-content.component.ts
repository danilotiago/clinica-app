import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'clinica-title-content',
  templateUrl: './title-content.component.html',
  styleUrls: ['./title-content.component.scss'],
})
export class TitleContentComponent implements OnInit {

  @Input('title') title: string;

  constructor() { }

  ngOnInit() {}

}
