import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  cart=new BehaviorSubject<[]>([])
  get_cart(){
    return this.cart
    // return this.cart.asObservable()
  }
  get_cart_obs(){
    return this.cart.asObservable()
  }
  
  set_cart(value:any){
    this.cart.next(value)
  }

  // private products:any;
  // private shared_products:any;
  // // constructor() {}
  // constructor(private http: HttpClient) {
  //   this.http.get('https://dummyjson.com/products',{params:{limit:2}})
  //   .subscribe({
  //     next: (data: any) => {
  //       // this.products = data.products;
  //       this.products=new BehaviorSubject<any>(data.products)
       
  //     },
  //     error: (error:any) => {
  //       console.error('Error fetching products:', error);
  //     },
  //   });
  // }
  
  // get_products(){
  //   return this.products.asObservable()
  // }
  
  // set_products(value:any){
  //   this.products.next(value)
  // }
  
}
