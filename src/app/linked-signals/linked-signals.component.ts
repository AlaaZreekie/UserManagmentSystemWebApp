import { Component, computed, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-linked-signals',
  imports: [],
  templateUrl: './linked-signals.component.html',
  styleUrl: './linked-signals.component.scss'
})
export class LinkedSignalsComponent {

  quantitySignal = signal(1);
  price : number = 10;
  total = computed(() => {
      return this.quantitySignal() * this.price;
  })

  //sgort linked signal
  totalLinked = linkedSignal(() => {
      return this.quantitySignal() * this.price;
  })

  //source and compute
  totalLinkedSource = linkedSignal( {
    source: this.quantitySignal,
    computation: () => this.quantitySignal() * this.price
  })
  calculate() {
    this.quantitySignal.set(3);
  }
}
