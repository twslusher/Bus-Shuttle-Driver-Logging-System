import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StopsComponent } from './stops/stops.component';
import { LoopsComponent } from './loops/loops.component';

import { CountsComponent } from './counts/counts.component';

@NgModule({
  declarations: [
    AppComponent,
    StopsComponent,
    LoopsComponent,
    CountsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
