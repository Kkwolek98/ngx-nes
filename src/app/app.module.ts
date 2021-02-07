import { NgxNesModule } from './../../projects/ngx-nes/src/lib/ngx-nes.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxNesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
