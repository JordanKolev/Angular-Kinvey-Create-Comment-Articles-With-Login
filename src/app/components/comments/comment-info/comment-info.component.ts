import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { CommentInfo } from '../../shared/models/Comment-info';

@Component({
  selector: 'app-comment-info',
  templateUrl: './comment-info.component.html',
  styleUrls: ['./comment-info.component.css']
})
export class CommentInfoComponent implements OnInit {

  @Input() commentInfo: CommentInfo;
  @Output() deleteCommentEmitter = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  deleteComment(id: string) {
    this.deleteCommentEmitter.emit(id);
  }

  isAuthor(commentInfo: Object) {
    return commentInfo['_acl']['creator'] === localStorage.getItem('userId');
  }
}





