import { CurrencyPipe } from '@angular/common';
import { Component,inject } from '@angular/core';
import { ProductsCardComponent } from '../products-card/products-card.component';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe, ProductsCardComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  products_service=inject(ProductsService);
  cart:any
  total=0

  ngOnInit(){
    let test=this.products_service.get_cart()
    this.cart=test.value
    this.calc_total()
     
  }
  calc_total(){
    this.total=0
    for(let n=0;n<this.cart.length;n++){
      this.total+=this.cart[n].price*this.cart[n].qnty
    }
  }
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
    }
    
    this.products_service.set_cart(this.cart)
    this.calc_total()

  }
  remove_cart_item(item:any,n:number){
    item.qnty=false
    this.cart.splice(n,1)
  }
}
