import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticateService } from '../service/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  inValidLogin: boolean= false;
  constructor(private router: Router
             , private route: ActivatedRoute
             , private authService: AuthenticateService) { }

  ngOnInit(): void {
  }

  formSubmit(loginValue: any){
    this.authService.authenticateUser(
       {'username': loginValue.username, 'password': loginValue.password}
    ).subscribe((response) => {
      if(response) {
        let returnURL= this.route.snapshot.queryParamMap.get("returnURL");
        this.router.navigate([returnURL || '/']);
      }
      else{
        this.inValidLogin = true;
      }
    });
       
  }
}
