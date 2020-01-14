import { AuthUserService } from 'src/app/shared/services/auth-user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'clinica-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(
    private userService: AuthUserService,
    private router: Router
  ) { }

  ngOnInit() {}

  logout() {
    this.userService.logout();
    this.router.navigate(['']);
  }

}
