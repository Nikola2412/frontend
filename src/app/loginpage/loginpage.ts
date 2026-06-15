import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-loginpage',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './loginpage.html',
  styleUrl: './loginpage.css',
})
export class Loginpage{
  username = '';
  password = '';

  login(){
    //alert(this.username + " "+  this.password);
  }
}
