import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { debounceTime, switchMap, map, first } from 'rxjs/operators';
import { EmailService } from 'src/app/shared/services/email.service';

@Injectable({
  providedIn: 'root'
})
export class EmailUsedValidatorAsync {

  constructor(private emailService: EmailService) { }

  checkEmailInUse() {
    return (control: AbstractControl) => {
      return control.valueChanges
        .pipe(debounceTime(500))
        .pipe(switchMap(email => 
          this.emailService.verifyEmailInUse(email)
        ))
        .pipe(map((resp: any) => resp.emailUsed ? { emailUsed: true } : null))
        .pipe(first())
    }
  }
}
