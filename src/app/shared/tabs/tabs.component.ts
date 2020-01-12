import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'clinica-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {

    showTabs: boolean = true;
    constructor(private router: Router) {
    }

    ngOnInit() {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.showTabs = !event.url.includes("/login");
            }
        })
    }

}
