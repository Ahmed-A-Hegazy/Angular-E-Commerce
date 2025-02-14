import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as products from '../../../public/products.json';
import { CurrencyPipe, NgStyle } from '@angular/common';
import { percentage } from '../../../custom.pipe';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-details',
  imports: [NgStyle, percentage, CurrencyPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  router=inject(Router)
  products=products.products
  activatedRoute=inject(ActivatedRoute)
  // constructor(private activatedRoute:ActivatedRoute){}
  id:number=this.activatedRoute.snapshot.params['id']
  // product:any=this.products[this.id]
  round(value:number):number{
    return Math.round(value)
  }
  back(){
    this.router.navigate([''])
  }
  selected:number=0
  product:any;
  constructor(private http: HttpClient) {
    this.http.get('https://dummyjson.com/products/'+this.id)
    .subscribe({
      next: (data: any) => {
        this.product= data;
        // this.products_service.set_products(new BehaviorSubject<any>(data.products))
        // this.products=this.products_service.get_products
        // console.log(this.products)
      },
      error: (error:any) => {
        console.error('Error fetching products:', error);
      },
    });
  }

  products_service=inject(ProductsService);

  cart:any[]=[]
  ngOnInit(){
    let test=this.products_service.get_cart()
    this.cart=test.value
  }
  add_to_cart(p:any){
    let existing
    for(let n=0;n<this.cart.length;n++){
      if(this.cart[n].id==p.id){
        p=this.cart[n]
        existing=n
        break
      }
    }
    p.qnty?p.qnty++:p.qnty=1
    existing||existing===0?this.cart[existing]=p:this.cart.push(p)
    this.products_service.set_cart(this.cart)
    alert('Added successfully, check your cart !')
  }

}
