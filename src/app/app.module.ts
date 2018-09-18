import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { DemoCounterComponent } from './demo-counter/demo-counter.component';

@NgModule({
  declarations: [
    DemoCounterComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [
    DemoCounterComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {
  constructor (private injector: Injector) {}

  ngDoBootstrap() {
    const demoCounter = createCustomElement(DemoCounterComponent, {injector: this.injector});
    customElements.define('demo-counter', demoCounter);
  }
}
