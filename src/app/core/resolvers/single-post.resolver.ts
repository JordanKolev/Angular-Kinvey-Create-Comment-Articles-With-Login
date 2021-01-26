import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { PostInfo } from '../../components/shared/models/Post-info';
import { PostService } from '../services/post.service';


@Injectable({
    providedIn: 'root', 
})

export class SinglePostResolver implements Resolve<PostInfo> {

    constructor(private postService: PostService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id']; 
        return this.postService.getById(id); 

    }
}