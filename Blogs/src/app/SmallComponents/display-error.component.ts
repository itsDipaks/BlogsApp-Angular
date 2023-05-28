import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display-error',
  template: `
  <div class="container border  my-5" style="border-radius: 10px;">
    <div class="position-relative p-5 text-center text-muted bg-body   border-dashed rounded-5">
      <!-- <button type="button" class="position-absolute top-0 end-0 p-3 m-3 btn-close bg-secondary bg-opacity-10 rounded-pill" aria-label="Close"></button> -->
      <svg class="bi mt-5 mb-3" width="48" height="48"><use xlink:href="#check2-circle"/></svg>
      <h1 class="text-body-emphasis">{{displayerror}}</h1>
      <p class="col-lg-6 mx-auto mb-4">
      Please Add New Blog
      </p>
      <button class="btn btn-primary px-5 mb-5" routerLink={{redirectTo}} type="button">
   {{btnName}}
      </button>
    </div>
  </div>
  
  `,

})
export class DisplayErrorComponent {
  @Input() displayerror: string="";
  @Input() redirectTo: string="";
  @Input() btnName: string="";
 
}

