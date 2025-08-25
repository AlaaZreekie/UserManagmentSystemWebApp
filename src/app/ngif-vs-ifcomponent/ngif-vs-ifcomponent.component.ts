import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ngif-vs-ifcomponent',
  imports: [CommonModule, FormsModule],
  templateUrl: './ngif-vs-ifcomponent.component.html',
  styleUrl: './ngif-vs-ifcomponent.component.scss'
})
export class NgifVsIfcomponentComponent {

    isChecked : Boolean = false;
    isInputBox : boolean = true;
    inputFiled1 : string = '';
    inputFiled2 : string = '';

    onClick() {
      this.isChecked = !this.isChecked;
    }

    showField() {
      this.isInputBox = true;
    }

    hideField() {
      this.isInputBox = false;

    }
}
