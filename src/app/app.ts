import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,                 
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']       
})
export class App {
  protected readonly title = signal('login');
  email: string = '';
  password: string = '';
  answer: string = '';
  public Validate() {
    const emailIn = "chris@gmail.com";
    const passwordIn = "chris";

    if (!this.email && !this.password) {
      this.answer = "Empty email and password";
      
    } else if (!this.email) {
      this.answer = "Empty email";
    } else if (!this.password) {
      this.answer = "Empty password";
    } else if (this.email === emailIn && this.password === passwordIn) {
      this.answer = "Logged in successfully";
    } else {
      this.answer = "Invalid credentials";
    }
  }

}
