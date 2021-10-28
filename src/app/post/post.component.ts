import { Component, OnInit } from '@angular/core';
import { BadInputError } from '../error-handler/bad-input-error';
import { NotFoundError } from '../error-handler/not-found-error';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts?: any[];
  updatedPost = {
    postId: -1,
    postTitle: ""
  };
  constructor(private service: PostService) { }

  ngOnInit(): void {
    this.service.getAll()
        .subscribe((posts) => this.posts = posts
         ,(error) =>{
           if(error instanceof NotFoundError)
             alert("The post service is not reachable at the moment. Please try after sometime.");
           else
             throw error; 
         });
  }

  createPost(element: HTMLInputElement) {
    let post: any = {};
    post.title = element.value;
    this.service.create(post)
        .subscribe((post) => {
          console.log(post);
          this.posts?.splice(0, 0, post);
        },
        (error) => {
          if(error instanceof BadInputError)
            alert("The post data is not in correct format. Please send valid post data.");
          else
            throw error;
        },
        () => element.value = "");
  }

  populatePostTitle(post: any){
    this.updatedPost.postId = post.id;
    this.updatedPost.postTitle = post.title;
  }

  updatePost(post?: any) { 
    let p = this.posts?.find(x => x.id == post.postId);
    if(p != null) {
      p.title= post.postTitle;
      this.service.update(p)
        .subscribe((pst) => {
           console.log(pst);
        },
          (error) => {
          if(error instanceof NotFoundError)
            alert("The specified post is not found.");
          else
            throw error;
        }); 
    }
    else
      alert("The specified post is not found.");
  }

  deletePost(post: any) {
    let indexOfPost= (this.posts) ? this.posts.indexOf(post, 0) : -1;
    if(indexOfPost >= 0) {
      this.service.delete(post.id)
      .subscribe((post) => {
        this.posts?.splice(indexOfPost, 1);
      },
      (error) => {
        if(error instanceof NotFoundError)
          alert("The specified post is not found.");
        else
          throw error;
      });
    }
  }

}
