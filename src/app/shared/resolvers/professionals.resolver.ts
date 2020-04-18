import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ProfessionalService } from '../services/professional.service';
import { Professional } from '../models/Professional.model';

@Injectable()
export class ProfessionalsResolver implements Resolve<Observable<any>> {
    
    constructor(
        private professionalService: ProfessionalService
    ) { }

    resolve(): Observable<Professional[]> {
        return this.professionalService.getAllProfessionals();
    }
}