import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './loginpage.html',
  styleUrl: './loginpage.css',
})
export class Loginpage{
  private userService = inject(UserService)
  username = '';
  password = '';

  login(){
    this.userService.login(this.username,this.password).subscribe(data=>{
      console.log("dadasd")
    });
  }
}
