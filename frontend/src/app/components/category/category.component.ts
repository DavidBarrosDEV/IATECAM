import { Component, OnInit } from '@angular/core';
import {Category} from "../../interfaces/category";
import {HttpClient} from "@angular/common/http";
import {Product} from "../../interfaces/product";
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})

export class CategoryComponent implements OnInit {
  public baseUrl: string = 'http://localhost:8000/core/category/'
  public categories: Category[] = []
  public name: string;
  public teste: string;

  constructor(public http: HttpClient){
    this.name = ''
    this.teste = ''
  }

  ngOnInit(): void {
    this.getCategory()
  }

  public getCategory(){
      this.http.get<Category[]>(this.baseUrl).subscribe(
          result => this.categories = result
      )
  }

  public saveCategory(){
    const payload = {
      "name": this.name
    }
    this.http.post<Category>(this.baseUrl, payload).subscribe(
        () => window.location.reload(),
        error => {
          const field = Object.keys(error.error)[0]
          const message = (error.error[field])
          const err = `${field}: ${message}`
          window.alert(err)
        }
    )
  }

  public deleteCategory(id: number){
    this.http.delete<Product>(this.baseUrl + id + '/').subscribe(
        () => window.location.reload(),
        () => window.alert('ERRO. Existem produtos referentes a essa categoria cadastrados')
    )

  }
}
