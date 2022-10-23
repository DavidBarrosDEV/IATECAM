import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InitComponent} from "./components/init/init.component";
import {AboutComponent} from "./components/about/about.component";

const routes: Routes = [
  {path: '', component: InitComponent},
  {path: 'init', component: InitComponent},
  {path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
