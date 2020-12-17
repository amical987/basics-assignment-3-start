import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = 'Secret password : tuna';
  allowPassword = false;
  passwords = [];
  //n = 1;
  
  getPassword (){
    this.allowPassword = !this.allowPassword;
    this.passwords.push(new Date());
    //this.passwords.push(this.passwords.length+1);
    //this.n=this.n+1;
  }
  //getColor(){
  //  return this.n > 3 ? 'blue' : 'transparent';
  //}
}
