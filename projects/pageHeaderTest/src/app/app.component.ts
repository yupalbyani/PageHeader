import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pageHeaderTest';
  text = {
    title:"Access Manager",
    src:"assets/images/icon/design.png",
    description:"Users & Roles"
  }
}
