import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { of } from 'rxjs';
import { FirstCustomPipePipe } from '../pipes/first-custom-pipe.pipe';

@Component({
  selector: 'app-build-in-pipes',
  imports: [CommonModule, FirstCustomPipePipe],
  templateUrl: './build-in-pipes.component.html',
  styleUrl: './build-in-pipes.component.scss'
})
export class BuildInPipesComponent {
  personData = {
    name : "alaa",
    age : 22,
    city: "damas",
  }
  number : number = 998653381;
  items  = of(['apple', 'banana', 'lemon']);
  currentDate : Date = new Date();
  angularPipes : string = "use pipes to format data in angular temples";
}
