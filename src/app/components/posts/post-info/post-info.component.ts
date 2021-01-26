import { Component, Input, OnInit } from '@angular/core';
import { i18nPostprocess } from '@angular/core/src/render3';
import { Router } from '@angular/router';
import { PostService } from 'src/app/core/services/post.service';
import { PostInfo } from '../../shared/models/Post-info';

@Component({
  selector: 'app-post-info', 
  templateUrl: './post-info.component.html',
  styleUrls: ['./post-info.component.css']
})
export class PostInfoComponent implements OnInit {

  @Input() post: PostInfo; 
  @Input() desc: string; 
  @Input() rank: number; 

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
  } 

  isAuthor(post: Object) {
    return post['_acl']['creator'] === localStorage.getItem('userId');
  }

  deletePost(id: string) {
    this.postService.deletePost(id)
      .subscribe(() => {
        this.router.navigate(['/posts']);
      })
  }

}
