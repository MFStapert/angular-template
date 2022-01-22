import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: ` <h1 class="home">Hello {{ text }}</h1> `,
  styles: [
    `
      .home {
        @apply text-3xl font-bold underline;
      }
    `,
  ],
})
export class TestComponent {
  public text = 'world!';
}
