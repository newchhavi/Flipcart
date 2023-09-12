import { Component,OnInit } from '@angular/core';
import { ShoppingService } from '../service/shopping.service';
import { Cart1Service } from '../service/cart1.service';
import {faTrash} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})


export class ProductComponent implements OnInit {
 
  imo1=faTrash
  image1=[
    '../assets/imo/aro1.webp',
    '../assets/imo/sam1.webp',
    '../assets/imo/sky.webp',
    '../assets/imo/ph1.webp'
  ]

shoppingData:any;

  constructor(private shoppingService:ShoppingService ,private cartService:Cart1Service){}

ngOnInit(){
  this.shoppingService.getShoppingData().subscribe((data:any)=>{
    this.shoppingData=data;
    console.log("data 3",data);
    
  })
}

addToCart(item:any)
{

  this.cartService.addToCart(item);
  console.log("product",item);
  
}



//delet json data//
deleteItem(item:string):void{
  console.log("delet",item);
     this.cartService.removeFromCart(item);
  
}
}
