import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'clinica-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public appPages: any = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
