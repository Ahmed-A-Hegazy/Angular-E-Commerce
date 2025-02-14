import { ProductsService } from './../services/products.service';
import { Component, Input, Pipe, PipeTransform, input, inject, EventEmitter, Output } from '@angular/core';
import { CurrencyPipe, NgStyle, } from '@angular/common';
import { Router } from '@angular/router';
import { percentage } from '../../../custom.pipe';
import * as products from '../../../public/products.json';
// import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-products-card',
  imports: [NgStyle, CurrencyPipe, percentage],
  templateUrl: './products-card.component.html',
  styleUrl: './products-card.component.css'
})
export class ProductsCardComponent {

  @Input() product:any
  @Input() cart:any;
  @Output() toggle_parent= new EventEmitter<any>();




// start instance of the class componone by either inject or constructor function
  // router=inject(Router)
  
  constructor(private router:Router){}
  handle_item(id:number){
    this.router.navigate(['/product-details',id])
  }

  // cart:any=this.products_service.get_cart()
  add_to_cart(){
    // this.cart[this.cart.length]=this.product
    // this.cartChange.emit(this.cart)
    // this.products_service.set_cart(this.cart)
    // console.log(this.cart)
      this.toggle_parent.emit([this.product,'add'])

  }
  remove_from_cart(){
    this.toggle_parent.emit([this.product,'remove'])

  }
  minus_from_cart(){
    this.toggle_parent.emit([this.product,'minus'])

  }
  round(value:number):number{
    return Math.round(value)
  }
}

