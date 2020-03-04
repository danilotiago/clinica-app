import { ProfessionalItem } from './professional-item.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'clinica-professionals-list',
    templateUrl: './professionals-list.component.html',
    styleUrls: ['./professionals-list.component.scss'],
})
export class ProfessionalsListComponent implements OnInit {

    @Input('professionalItems') professionalItems: ProfessionalItem[];

    constructor() { }

    ngOnInit() { }

}
