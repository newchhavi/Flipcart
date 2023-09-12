import { Component,OnInit } from '@angular/core';
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import { Cart1Service } from 'src/app/service/cart1.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
imo1=faTrash;
isBoolean:boolean=false
cartItems:any[]=[];
//count number//
cartItemCount:number=0;

//add total//
totalPrice:number=0;


constructor(private cartService:Cart1Service){}

ngOnInit(): void {
  //count//
  this.cartService.cartItemCount$.subscribe((count)=>{
    this.cartItemCount=count;
    //count//
  })
  this.cartItems=this.cartService.getCartItems();

  //count total//
  this.totalPrice=this.cartItems.reduce((total,item)=>{
    return total+(item.Price *item.quantity);
  },0)
}
//remove//
removeFromCart(item:any)
{
  this.cartService.removeFromCart(item);
  console.log("remove",item);
  
}

//decreament//
decreaseQuantity(item:any)
{
  if(item.quantity>1)
  {
    item.quantity--;
  }
  console.log("decrese",item.quantity);
  
}


increaseQuantity(item:any)
{
    item.quantity++;
    const value = item.quantity
  console.log(value,"quantity")  
}


}
