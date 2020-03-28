import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SpecialtyService } from '../services/specialty.service';
import { Specialty } from '../models/Specialty.model';

@Injectable()
export class SpecialtyResolver implements Resolve<Observable<any>> {
    
    constructor(
        private specialtyService: SpecialtyService
    ) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Specialty> {
        return this.specialtyService.get(route.params.id);
    }
}