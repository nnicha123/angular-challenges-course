import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';
import { map, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly baseRoute = 'https://jsonplaceholder.typicode.com/users';

  constructor(public http:HttpClient) { }

  getUserById(id:number){
    return this.http.get(`${this.baseRoute}/${id}`).pipe(
      map((value) => new User(value))
    )
  }
}
