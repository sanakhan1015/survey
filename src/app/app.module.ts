import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { QuizService } from './quiz.service';
import { QuizComponent } from './quiz/quiz.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent
  ],
  imports: [ 
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
