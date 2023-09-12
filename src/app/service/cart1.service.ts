import { Injectable } from '@angular/core';
//behav//
import {BehaviorSubject, Observable} from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class Cart1Service {

cartItem:any[]=[];
constructor() { }

//behav//
cartItemCountSubject=new BehaviorSubject<number>(0);
cartItemCount$=this.cartItemCountSubject.asObservable();
//behav//
addToCart(item:any):any
{
  item.quantity=1;  //initial valu quantyity//
  this.cartItem.push(item);
  console.log("card",item);
  //behav//
  this.cartItemCountSubject.next(this.cartItem.length);
  
}
//remove//
removeFromCart(item:any)
{
  const index=this.cartItem.indexOf(item); //0,1234567
  if(index!==-1)
  {
    this.cartItem.splice(index,1);
    this.cartItemCountSubject.next(this.cartItem.length);
  }
}



getCartItems():any[]
{
  return this.cartItem;
}






}
