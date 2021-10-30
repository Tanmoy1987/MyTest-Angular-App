import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {
  loginId?: number;
  constructor(private route: ActivatedRoute
             ,private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap
        .subscribe((params) => {
           let id = params.get("id");
           if(id) 
             this.loginId = +id;
        });
  }

  navigateBack(){
    this.router.navigate(['/home', { outlets: { 'sub': ['followers'] } }]);
  }
}
