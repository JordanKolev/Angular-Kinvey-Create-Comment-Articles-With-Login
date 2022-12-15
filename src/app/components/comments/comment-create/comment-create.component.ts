import { Component, Input, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { CommentService } from 'src/app/core/services/comment.service';

@Component({
  selector: 'app-comment-create',
  templateUrl: './comment-create.component.html',
  styleUrls: ['./comment-create.component.css']
})
export class CommentCreateComponent implements OnInit {

  @ViewChild('f') createCommentForm: NgForm;
  @Input() postId: string;
  @Output() postCommentEmitter = new EventEmitter<object>();

  constructor(private commentService: CommentService) { }

  ngOnInit() {
  }

  postComment() {
    const body = this.createCommentForm.value;
    body['postId'] = this.postId;
    body['author'] = localStorage.getItem('username');

    this.postCommentEmitter.emit(body);
    this.createCommentForm.reset();

  }

}
