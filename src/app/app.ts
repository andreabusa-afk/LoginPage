import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

  protected readonly title = signal('login');

  isLogin: boolean = true;

  email: string = '';
  password: string = '';

  regEmail: string = '';
  regPassword: string = '';
  role: string = 'student';

  message: string = '';

  students: any[] = [];
  instructors: any[] = [];

  switchForm(){
    this.isLogin = !this.isLogin;
    this.message = '';
  }

  register(){

    if(!this.regEmail || !this.regPassword){
      this.message = "Fill all fields";
      return;
    }

    const user = {
      email: this.regEmail,
      password: this.regPassword
    };

    if(this.role === 'student'){
      this.students.push(user);
    }else{
      this.instructors.push(user);
    }

    this.message = "Registration successful";

    this.regEmail = '';
    this.regPassword = '';
  }

  Validate(){

    if(!this.email && !this.password){
      this.message = "Empty email and password";
      return;
    }

    if(!this.email){
      this.message = "Empty email";
      return;
    }

    if(!this.password){
      this.message = "Empty password";
      return;
    }

    const student = this.students.find(
      u => u.email === this.email && u.password === this.password
    );

    const instructor = this.instructors.find(
      u => u.email === this.email && u.password === this.password
    );

    if(student){
      this.message = "Logged in as Student";
    }
    else if(instructor){
      this.message = "Logged in as Instructor";
    }
    else{
      this.message = "Invalid credentials";
    }

  }

}