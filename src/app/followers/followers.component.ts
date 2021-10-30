import { Component, OnInit } from '@angular/core';
import { NotFoundError } from '../error-handler/not-found-error';
import { FollowerService } from '../service/follower.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
  followers?: any[];
  constructor(private service: FollowerService) { }

  ngOnInit(): void {
    this.service.getAll()
        .subscribe((followers) => this.followers = followers
         ,(error) =>{
           if(error instanceof NotFoundError)
             alert("The followers service is not reachable at the moment. Please try after sometime.");
           else
             throw error; 
         });
  }

}
