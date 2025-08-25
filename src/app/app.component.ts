import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from "./user/user.component";
import { DataBindingComponent } from "./data-binding/data-binding.component";
import { DirectivesComponent } from './directives/directives.component';
import { NgifVsIfcomponentComponent } from "./ngif-vs-ifcomponent/ngif-vs-ifcomponent.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgifVsIfcomponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'UserManagmentSystemWebApp';
}
