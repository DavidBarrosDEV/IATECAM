import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InitComponent} from "./components/init/init.component";
import {AboutComponent} from "./components/about/about.component";
import {CategoryComponent} from "./components/category/category.component";
import {ProductComponent} from "./components/product/product.component";

const routes: Routes = [
  {path: 'init', component: InitComponent},
  {path: 'about', component: AboutComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'product', component: ProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
