import { Injectable } from '@angular/core';
import { AuthUserService } from './auth-user.service';
import { Profiles } from '../enums/Profiles.enum';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RedirectAfterLoginService {

  constructor(
    private authUserService: AuthUserService,
    private router: Router
  ) { }

  navigateAfterLogin(): void {
    this.authUserService.getUser().subscribe(user => {
        if (!user) return;
        
        const profiles: [string] = user.profiles;

        if (profiles.includes(Profiles.Admin) || profiles.includes(Profiles.Professional)) {
            this.router.navigate(['/home', 'professional']);
        } else {
            this.router.navigate(['/home', 'client']);
        }
    });
}
}
