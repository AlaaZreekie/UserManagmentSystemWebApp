import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DataBindingComponent } from "./data-binding/data-binding.component";
import { DirectivesComponent } from './directives/directives.component';
import { ForComponentComponent } from "./for-component/for-component.component";
import { SwitchComponentComponent } from "./switch-component/switch-component.component";
import { AttributeDirectivesComponent } from "./attribute-directives/attribute-directives.component";
import { SignalsComponent } from './signals/signals.component';
import { LinkedSignalsComponent } from "./linked-signals/linked-signals.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'UserManagmentSystemWebApp';
}
