import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(
    private authService: AuthService,) { }



  ngOnInit(): void {
  }

  login() {
    this.authService.login();
  }
  logout() {
    this.authService.logout();
  }
}
