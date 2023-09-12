import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  signup:any[]=[];
  signObj:any={
    UserName:'',
    Email:'',
    Password:'',
  };
  loginObj:any={
    Email:'',
    Username:'',
    Password:''
  }
  constructor(private router:Router){}

  ngOnInit():void{
    const localData=localStorage.getItem('signup')
    if(localData!=null)
    {
      this.signup=JSON.parse(localData);
    }
  }
  onLogin()
  {

    const isUserExist=this.signup.find(m=>m.Email==this.loginObj.Email && m.Password==this.loginObj.Password );
    console.log(this.loginObj.Email);
    console.log(this.loginObj.Password);  

    if(isUserExist !=undefined)
    {
      alert("wrong value")
    }
    else
    {
      alert("users Login Successsfull")
      this.router.navigateByUrl("Product")
      // alert("wrong value")
    }
    
  }
  
}
