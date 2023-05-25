import { Component } from '@angular/core';

@Component({
  selector: 'app-notfound',
  template: `
  <div class="container pt-5 mt-5">
    <div class="row">
        <div class="col-md-12">
            <div class="error-template">
                <h1 >
                    Oops!</h1>
                <h2>
                    404 Not Found</h2>
                <div class="error-details">
                    Sorry, an error has occured, Requested page not found!
                </div>
                <div class="error-actions">
                    <a routerLink="/" class="btn btn-primary btn-lg"><span class="glyphicon glyphicon-home"></span>
                        Take Me Home </a>
                </div>
            </div>
        </div>
    </div>
</div>
  `,
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent {

}
