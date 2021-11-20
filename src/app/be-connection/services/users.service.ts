import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PageObj, User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {

  private baseUrl = environment.baseUrl + '/users?/page=';

  constructor(private http: HttpClient) { }

  getUsers(params: PageObj): any {
    return this.http.get(this.baseUrl + params.page);
  }
}
