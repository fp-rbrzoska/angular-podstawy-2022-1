import { Component } from '@angular/core';

@Component({
  selector: 'fp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fp-proj';

  uppercaseHandler( newTitle: string) {
    console.log(newTitle);
  }
}
