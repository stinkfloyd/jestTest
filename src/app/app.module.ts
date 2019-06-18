import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestHeadComponent } from './test-head/test-head.component';
import { TestBodyComponent } from './test-body/test-body.component';
import { TestFooterComponent } from './test-footer/test-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TestHeadComponent,
    TestBodyComponent,
    TestFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
