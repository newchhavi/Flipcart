import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'

 
@Injectable({
  providedIn: 'root'
})

export class ShoppingService {
 private baseApiUrl ='http://localhost:3000/shoping';
    

  constructor(private http:HttpClient) { }
  

getShoppingData():Observable<any>{
  // console.log(this.http.get(this.baseApiUrl));
  
 return this.http.get(this.baseApiUrl); //attech the api data by json//
}



}

;