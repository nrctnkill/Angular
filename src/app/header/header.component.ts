import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  prodCount=0;
  public greet:string="";
  constructor(private ps:ProductService){
    let hrs=new Date().getHours();
    if(hrs > 17 && hrs <20){
      this.greet="Good Evening!";
    }
    else if(hrs > 12 && hrs<17){
      this.greet="Good Afternoon";
    }
    else{
      this.greet="Good Morning!";
    }
  }

ngOnInit():void{
  this.ps.selectedProducts.subscribe(sel=>{
    this.prodCount=sel.length;
  })
}
  



}
