import { Component, OnInit } from '@angular/core';
import {Product} from "../../interfaces/product";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public baseUrl: string = 'http://localhost:8000/core/product/'
  public products: Product[] = []
  public name: string = ''

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getProduct()
  }

  public getProduct(){
    this.http.get<Product[]>(this.baseUrl).subscribe(
        result => this.products = result
    )
  }
}
