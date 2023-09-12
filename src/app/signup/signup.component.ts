import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signup:any[]=[];
  signObj:any={
    UserName:'',
    Email:'',
    Phone:'',
    Password:'',
  }
  Sign1()
  {

    this.signup.push(this.signObj)
    console.log("ys", this.signup);

    localStorage.setItem('signup',JSON.stringify(this.signup))
    console.log(this.signup);

    this.signObj={
    UserName:'',
    Email:'',
    Phone:'',
    Password:'',
    }
  }
  
}
