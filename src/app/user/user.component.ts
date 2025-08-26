import { Component } from '@angular/core';
import {Router , RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [RouterLink],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  constructor(private router : Router){}
  loginData() {
    // this.router.navigateByUrl("data-binding");
    this.router.navigate(['data-binding', ])
  }
}
