import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { Interceptor } from '../Http/interceptor';
import { DemoService } from '../Service/demo.service';
import { Context } from '../Service/DNN/context.service';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
	Context,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    },
    DemoService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
