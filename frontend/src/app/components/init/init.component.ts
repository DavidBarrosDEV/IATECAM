import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.scss']
})
export class InitComponent implements OnInit {
    public teste: string;
  constructor(private router: Router) {
      this.teste = ''
  }

  ngOnInit(): void {
  }

  public goToPage(path: string): void {
    this.router.navigate(['/', path])
        .then(nav => {
          console.log(nav); // true if navigation is successful
        }, err => {
          console.log(err) // when there's an error
        });
  }
}
