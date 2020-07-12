import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';

import { Product} from '../model/app.product.model';
import { Categories, Manufacturers } from '../model/app.constant';
import { Logic } from '../model/app.logic';
import {CustomValidator} from './app.custom.validators';
import { typeWithParameters } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-productview',
  templateUrl: './productview.component.html',
  styleUrls: ['./productview.component.css']
})

export class ProductviewComponent implements OnInit {

  productList : Array<Product>
  product :Product
  headers: Array<string>
  private logic : Logic

  categories = Categories;
  manufacturers = Manufacturers;

  productForm: FormGroup;
  constructor() { 
    this.productList = new Array<Product>();
    this.product = new Product(0,'','','','','',0);
    this.headers = new Array<string>();
    this.logic = new Logic()



    this.productForm  = new FormGroup({
        ProductRowId : new FormControl(this.product.ProductRowId,
        Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(8),
        Validators.pattern('[0-9]+'),
        CustomValidator.CheckEven
        ])),
        ProductId : new FormControl(this.product.ProductId),
        ProductName : new FormControl(this.product.ProductName, Validators.required),
        CategoryName : new FormControl(this.product.CategoryName, Validators.required),
        Manufacturer : new FormControl(this.product.Manufacturer, Validators.required),
        Description : new FormControl(this.product.Description, Validators.required),
        BasePrice : new FormControl(this.product.BasePrice, Validators.compose([Validators.required,CustomValidator.IsNegative]))
        });
  }

  ngOnInit(): void {
    for(let p in this.product) {
      this.headers.push(p);
   }
   this.productList = this.logic.getProducts();
  }
  
  save() : void {
    this.product = this.productForm.value;
    this.productList = this.logic.addProduct(this.product);
  }

  clear(): void {
    this.product = new Product(0, '', '', '', '', '', 0);
  }

  getSelectedProduct(product: Product): void {
    this.productForm.setValue(product);
 }
delete(product : Product) : void {
  let index = this.productList.indexOf(product);
  if(index > -1)
  {
    this.logic.deleteProduct(this.productList[index]);
  }
}

  sort($event): void {
     let sortby = $event.target.value;
     if(sortby === "ProductName")
     {
      this.productList.sort((productA, productB) => productA.ProductName.localeCompare(productB.ProductName));
     }
     if(sortby === "Price")
     {
      this.productList.sort((productA, productB) => productA.BasePrice - productB.BasePrice);
     }
  }

  reverse() : void {
      this.productList.reverse()
  }

  validate($event) : void {
   let productIdForm =  this.productForm.get("ProductId");
   let productIdList = this.productList.map(x => x.ProductId);
   productIdForm.setValidators([CustomValidator.IDExists(productIdList, $event.target.value), Validators.required]);
   productIdForm.updateValueAndValidity();
  }
}