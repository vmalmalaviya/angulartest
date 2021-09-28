import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubsectionComponent } from './subsection/subsection.component';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import { CompletebookdetailsComponent } from './completebookdetails/completebookdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    SubsectionComponent,
    BookdetailsComponent,
    CompletebookdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
