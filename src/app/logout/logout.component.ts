import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from '../service/authenticate.service';

@Component({
  selector: 'logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router
            , private authService: AuthenticateService) { }

  get logOutVisible(): boolean {
    return this.authService.isLoggedIn();
  }
  ngOnInit(): void {
  }

  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(["/login"]);
  }
}
