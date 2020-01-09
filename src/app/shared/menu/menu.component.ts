import { Component, OnInit } from '@angular/core';

import { Menu } from './menu';
import { menuList } from './menu-list';

@Component({
  selector: 'clinica-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  protected menuList: Menu[] = menuList;

  constructor() { }

  ngOnInit() {
  }

}
