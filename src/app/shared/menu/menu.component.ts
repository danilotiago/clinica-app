import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { Menu } from './menu';
import { menuList } from './menu-list';

@Component({
    selector: 'clinica-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

    protected menuList: Menu[] = menuList;
    showMenu: boolean = true;
    constructor(private router: Router) { }

    ngOnInit() {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.showMenu = !event.url.includes("/login");
            }
        })
    }

}
