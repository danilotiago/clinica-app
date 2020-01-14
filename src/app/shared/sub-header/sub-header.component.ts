import { AuthUserService } from 'src/app/shared/services/auth-user.service';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Component({
  selector: 'clinica-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss'],
})
export class SubHeaderComponent implements OnInit {

  @Input('showWelcome') showWelcome: boolean = false;
  user$: Observable<User>;

  constructor(protected authUserService: AuthUserService) { }

  ngOnInit() { 
    this.user$ = this.authUserService.getUser();
  }

}
