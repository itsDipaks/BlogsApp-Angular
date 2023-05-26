import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles:[`
  
  .routes{
    margin-top: 80px;
}
  `]
})
export class AppComponent {
  title = 'Blogs';
}
