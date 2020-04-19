import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { SpecialtyService } from '../services/specialty.service';

@Injectable()
export class SpecialtiesResolver implements Resolve<Observable<any>> {
    
    constructor(
        private specialtyService: SpecialtyService
    ) { }

    resolve(): Observable<any> {
        return this.specialtyService.getAllSpecialties();
    }
}