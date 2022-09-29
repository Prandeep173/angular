import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My-Title';

  count = 7;
  number1 = 1;
  number2 = 2;
  result = this.number1 + this.number2;

  listofnumbers =  [ "Audi" , "BMW" , "Lotus" ];

  decrement = () => {
    this.count--;
  }
}
