import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ProfessionalService } from '../services/professional.service';
import { Professional } from '../models/Professional.model';

@Injectable()
export class ProfessionalResolver implements Resolve<Observable<any>> {
    
    constructor(
        private professionalService: ProfessionalService
    ) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Professional> {
        return this.professionalService.get(route.params.id);
    }
}