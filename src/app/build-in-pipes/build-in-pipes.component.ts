import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-build-in-pipes',
  imports: [CommonModule],
  templateUrl: './build-in-pipes.component.html',
  styleUrl: './build-in-pipes.component.scss'
})
export class BuildInPipesComponent {
  personData = {
    name : "alaa",
    age : 22,
    city: "damas",
  }
  items  = of(['apple', 'banana', 'lemon']);
  currentDate : Date = new Date();
  angularPipes : string = "use pipes to format data in angular temples";
}
