import { StateService } from './../services/state.service';
import { Observable } from 'rxjs';
import { Resolve } from '@angular/router';
import { State } from '../models/State.model';
import { Injectable } from '@angular/core';

@Injectable()
export class StatesResolver implements Resolve<Observable<any>> {
    
    constructor(
        private stateService: StateService
    ) { }

    resolve(): Observable<any> {
        return this.stateService.getAllStates();
    }

}
