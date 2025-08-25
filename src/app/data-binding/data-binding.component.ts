import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {
name : string = "ALOOHA";
topic : string = "Data Binding";
image : string = "1.jpg"

onSave() {
  alert("Data Saved Done bla bla...");
}

onChange() {
  alert("Country Has Changed");
}

random = "";
}
