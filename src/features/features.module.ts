import { NgModule } from '@angular/core';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [TestComponent],
  exports: [TestComponent],
})
export class FeaturesModule {}
