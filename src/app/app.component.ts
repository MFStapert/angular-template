import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <h1 class="home">Hello world!</h1> `,
  styles: [
    `
      .home {
        @apply text-3xl font-bold underline;
      }
    `,
  ],
})
export class AppComponent {}
