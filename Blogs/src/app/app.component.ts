import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  
  .routes{
    min-height:80vh;
}
 
  `]
})
export class AppComponent {
  title = 'Blogs';
}
