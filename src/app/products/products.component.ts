import { Component, OnInit } from '@angular/core';
import { Product } from '../Models/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products:Product[]=[];
  arrProds:Product[]=[];
  constructor(private ps:ProductService) { 
    this.products=ps.products;
  }

  ngOnInit(): void {
    console.log('')
  }

  addToCart(productname:Product){
    //console.log('product name:'+productname);
    this.arrProds.push(productname);
    this.ps.selectedProducts.next(this.arrProds);
  }

 

}
