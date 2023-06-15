import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  message: string = '';

  showAlert(): void {
    alert('hello');
  }

  DoubleAlert(): void {
    alert('hello hello');
  }

  ButtonClick(event: any): void {
    let Button = event.target as HTMLButtonElement;
    console.log(Button.value);
  }

  MouseOver(event: MouseEvent): void {
    console.log('Position de la souris :', event.clientX, event.clientY);
  }

  EnterKey(): void {
      console.log('Tu appuie sur la touche entrée');
  }

  MessageEvent(event: any): void {
    const inputElement = event.target as HTMLInputElement;
    this.message = inputElement.value;
  }
}