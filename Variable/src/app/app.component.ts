import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  fullname: string = 'John Smith';
  
  updateFullname(firstNameInput: HTMLInputElement, lastNameInput: HTMLInputElement) {
    this.fullname = `${firstNameInput.value} ${lastNameInput.value}`;
  }
}



