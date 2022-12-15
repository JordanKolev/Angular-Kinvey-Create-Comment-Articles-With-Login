import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { PostService } from '../../../core/services/post.service';
import { CommentService } from '../../../core/services/comment.service';
import { CommentInfo } from '../../shared/models/Comment-info';
import { PostInfo } from '../../shared/models/Post-info';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post: PostInfo;
  comments$: Observable<CommentInfo[]>;
  id: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService,
    private commentService: CommentService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.post = this.route.snapshot.data['post'];
    this.comments$ = this.commentService.getAllForPost(this.id);
  }

  loadComments() {
    this.comments$ = this.commentService.getAllForPost(this.id);
  }

  postComment(body) {
    this.commentService
      .postComment(body)
      .subscribe((data) => {
        console.log(data);
        this.loadComments();
      });
  }

  deleteComment(id) {
    this.commentService
      .deleteComment(id)
      .subscribe(() => {
        this.loadComments();
      });
  }

  deletePost(id: string) {
    this.postService.deletePost(id)
      .subscribe(() => {
        this.router.navigate(['/posts']);
      });
  }
}
