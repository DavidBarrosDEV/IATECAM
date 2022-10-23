import { Component, OnInit } from '@angular/core';
import {Category} from "../../interfaces/category";
import {HttpClient} from "@angular/common/http";
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
    this.http.post<Category>(this.baseUrl, payload).subscribe(() => window.location.reload()
    )
  }

}
