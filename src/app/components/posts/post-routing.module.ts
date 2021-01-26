import { NgModule } from '@angular/core'; 
import { RouterModule, Route } from '@angular/router';
import { SinglePostResolver } from 'src/app/core/resolvers/single-post.resolver';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostListComponent } from './post-list/post-list.component';

const postRouters: Route[] = [ 
    { path: '', component: PostListComponent },
      { path: 'user', component: PostListComponent },
      { path: 'create', component: PostCreateComponent },
      { path: 'edit/:id', component: PostEditComponent },
      { path: 'details/:id', component: PostDetailsComponent, resolve: { post: SinglePostResolver } }, 
] 

@NgModule({
    imports: [
        RouterModule.forChild(postRouters), 
    ], 
    exports: [
        RouterModule, 
    ]
}) 





export class PostRoutingModule { } 