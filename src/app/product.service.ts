import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './Models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:Product[] =[
    {id:1,name: 'Apple IPhone 13',price:80000,image:''},
    {id:2,name: 'One Plus 8T',price:40000,image:''},
    {id:3,name: 'Samsung Galaxy 8',price:20000,image:''},
    {id:4,name: 'Vivo Note',price:10000,image:''},
    {id:5,name: 'Oppo Note Pro',price:8000,image:''}
];
  public selectedProducts =new BehaviorSubject<Product[]>([]);
  constructor() { }
}
