import { Component,inject } from '@angular/core';
import { ProductsCardComponent } from '../products-card/products-card.component';
import * as products from '../../../public/products.json';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products-wrapper',
  imports: [ProductsCardComponent, HttpClientModule],
  templateUrl: './products-wrapper.component.html',
  styleUrl: './products-wrapper.component.css'
})
export class ProductsWrapperComponent {
  products=products.products
  cart:any[]=[]
  ngOnInit(){
    let test=this.products_service.get_cart()
    this.cart=test.value
  }
  products_service=inject(ProductsService);

  toggle([p,fun]:any){
    let existing
    for(let n=0;n<this.cart.length;n++){
      if(this.cart[n].id==p.id){
        p=this.cart[n]
        existing=n
        break
      }
    }

    if(fun=='add'){
      p.qnty?p.qnty++:p.qnty=1
      existing||existing===0?this.cart[existing]=p:this.cart.push(p)
    }
    else if(fun=='remove'&&(existing||existing===0)){
      this.remove_cart_item(this.cart[existing],existing)
      return
    }
    else if(fun=='minus'&&(existing||existing===0)){
      if(p.qnty){p.qnty--}
      if(!p.qnty){this.remove_cart_item(this.cart[existing],existing)}
      else{this.cart[existing]=p}

      // if(p.qnty<=0){
      //   this.remove_cart_item(this.cart[existing],existing)
      // }
    }
    
    // existing||existing===0?this.cart[existing]=p:this.cart.push(p)
    this.products_service.set_cart(this.cart)
  }
  remove_cart_item(item:any,n:number){
    item.qnty=false
    this.cart.splice(n,1)
  }
  // products_service=inject(ProductsService)
  // headers : authorization :{access token}

  // products:any;
  // constructor(private http: HttpClient) {
  //   this.http.get('https://dummyjson.com/products',{params:{limit:30,sotBy:'name',order:'desc'}})
  //   .subscribe({
  //     next: (data: any) => {
  //       this.products = data.products;
  //       // this.products_service.set_products(new BehaviorSubject<any>(data.products))
  //       // this.products=this.products_service.get_products
  //       // console.log(this.products)
  //     },
  //     error: (error:any) => {
  //       console.error('Error fetching products:', error);
  //     },
  //   });
  // }

  // }
// ngOnInit(){
//   console.log(this.products_service.get_products())
// }
  
 
  // 


}
