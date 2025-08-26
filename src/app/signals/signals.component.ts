import { Component, signal, Signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {

  value: WritableSignal<number> = signal(0)

  onIncrement() {
    this.value.update(v => v+1);
  }

}
