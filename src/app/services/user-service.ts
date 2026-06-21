import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private http = inject(HttpClient)
  private path = "http://localhost:8080/users"
  
  login(username: string, password: string){
    const data = {
      username: username,
      password: password
    }
    return this.http.post(`${this.path}/login`, data);
  }
}
