import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'; 
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommentCreateComponent } from '../comments/comment-create/comment-create.component';
import { CommentInfoComponent } from '../comments/comment-info/comment-info.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostInfoComponent } from './post-info/post-info.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostRoutingModule } from './post-routing.module';

@NgModule({ 
    imports: [
        CommonModule, 
        FormsModule, 
        RouterModule, 
        PostRoutingModule, 
    ], 
    declarations: [ 
        CommentInfoComponent, 
        CommentCreateComponent, 
        PostCreateComponent, 
        PostDetailsComponent, 
        PostInfoComponent, 
        PostListComponent, 
        PostEditComponent, 
    ], 
    exports: [

    ], 
}) 

export class PostModule { }  