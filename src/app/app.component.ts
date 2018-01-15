import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public isLess = true;
  public number = null;

  rndNumber () {
    this.isLess = true;
    this.number = Math.random();
    if (this.number > 0.5) {
      this.isLess = false;
    }
    console.log(this.number);
  }
}
