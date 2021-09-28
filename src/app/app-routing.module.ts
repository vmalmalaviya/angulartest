import { compileComponentFromRender2 } from '@angular/compiler/src/render3/view/compiler';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookdetailsComponent } from '../app/bookdetails/bookdetails.component';
import { AppComponent } from './app.component';
import { CompletebookdetailsComponent } from './completebookdetails/completebookdetails.component';

const routes: Routes = [
  { path: 'book', component: BookdetailsComponent },
  { path: 'CompleteBookDetail', component: CompletebookdetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
