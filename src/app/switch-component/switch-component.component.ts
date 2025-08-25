import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-component',
  imports: [],
  templateUrl: './switch-component.component.html',
  styleUrl: './switch-component.component.scss'
})
export class SwitchComponentComponent {

  grade: number = 0;

  set(x:number) {
    this.grade = x;
  }
}
