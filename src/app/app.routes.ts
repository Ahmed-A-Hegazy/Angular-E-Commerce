import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ProductsWrapperComponent } from './products-wrapper/products-wrapper.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NotFoundError } from 'rxjs';
import { ErrorComponent } from './error/error.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
    {
        path: '',
        component:ProductsWrapperComponent,
        title:'Products'

    },
    {
        path: 'signup',
        component:SignupComponent,
        title:'Sign Up'

    },
    {
        path: 'login',
        component:LoginComponent,
        title:'Log In'

    },
    {
        path: 'product-details/:id',
        component:ProductDetailsComponent,
        title:'Product Details'

    },
    {
        path: 'cart',
        component:CartComponent,
        title:'Cart'
    },
    {
        path:'**',
        component:ErrorComponent
    }
    // wild cad must be last
];
