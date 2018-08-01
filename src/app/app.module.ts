import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StatusDirective } from './status.directive';
import { MyPipePipe } from './my-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    StatusDirective,
    MyPipePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
