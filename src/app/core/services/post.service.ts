import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_KEY } from '../../kinvey.tokens';
import { PostInfo } from 'src/app/components/shared/models/Post-info';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private readonly BASE_URL = `https://baas.kinvey.com/appdata/${APP_KEY}`;
  private readonly ALL_POSTS = `${this.BASE_URL}/posts?query={}&sort={"_kmd.ect": -1}`;
  private readonly CREATE_POST = `${this.BASE_URL}/posts`;

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get<PostInfo[]>(this.ALL_POSTS);
  }

  createPost(body) {
    return this.http.post(this.CREATE_POST, body);
  }

  getById(id: string) {
    return this.http.get<PostInfo>(this.CREATE_POST + `/${id}`);
  }

  getDetails(id: string) {
    return this.http.get<PostInfo>(this.CREATE_POST + `/${id}`);
  }

  editPost(body, id: string) {
    return this.http.put(this.CREATE_POST + `/${id}`, body);
  }

  deletePost(id: string) {
    return this.http.delete(this.CREATE_POST + `/${id}`);
  }

  getUserPosts() {
    return this.http
      .get<PostInfo[]>(`${this.BASE_URL}/posts?query={"author":"${localStorage.getItem('username')}"}&sort={"_kmd.ect": -1}`);
  }
}
