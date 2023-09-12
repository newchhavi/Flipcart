import { Component,OnInit } from '@angular/core';
import {faCartPlus} from '@fortawesome/free-solid-svg-icons'
import { Cart1Service } from 'src/app/service/cart1.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
icon=faCartPlus;
cartItemCount:number=0;

constructor(private cartService:Cart1Service){}

ngOnInit(): void {
  this.cartService.cartItemCount$.subscribe((count)=>{
    this.cartItemCount=count
  })
}


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
  console.log(this.signup)
  // this.signObj={
  //   UserName:'',
  // Email:'',
  // Phone:'',
  // Password:'',
  // }
}


}
