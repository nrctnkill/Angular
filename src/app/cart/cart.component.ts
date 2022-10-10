import { Component, OnInit } from '@angular/core';
import { Product } from '../Models/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private ps:ProductService) { }
public prodCount=0;
products:Product[]=[];
  ngOnInit(): void {
    this.ps.selectedProducts.subscribe(sel=>{
      this.prodCount=sel.length;
      this.products=sel;
    })
  }

  removeFromCart(){
    this.products.pop();
    this.ps.selectedProducts.next(this.products);
  }

}
