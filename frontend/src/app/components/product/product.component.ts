import { Component, OnInit } from '@angular/core';
import {Product} from "../../interfaces/product";
import {HttpClient} from "@angular/common/http";
import {Category} from "../../interfaces/category";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public baseUrl: string = 'http://localhost:8000/core/'
  public products: Product[] = []
  public name: string = ''
  public price: number;
  public serie: number;
  public category: number;
  public categories: Category[] = []

  constructor(private http: HttpClient) {
    this.price = 0;
    this.serie = 0;
    this.category = 0;

  }

  ngOnInit(): void {
    this.getProduct()
    this.getCategory()
  }

  public getProduct(){
    this.http.get<Product[]>(this.baseUrl + 'product/').subscribe(
        result => this.products = result
    )
  }

  public getCategory(){
    this.http.get<Category[]>(this.baseUrl + 'category/').subscribe(
        result => this.categories = result
    )
  }

  public saveProduct(){
    const payload = {
      "name": this.name,
      "price": this.price,
      "serie": this.serie,
      "category": this.category
    }
    this.http.post<Product>(this.baseUrl + 'product/', payload).subscribe(() => window.location.reload()
    )
  }

  public deleteProduct(id: number){
    this.http.delete<Product>(this.baseUrl + 'product/' + id + '/').subscribe(
        () => window.location.reload()
    )

  }
}
