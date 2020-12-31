import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { QuestionComponent } from './pages/question/question.component';
import { C1Q1Component } from './components/c1-q1/c1-q1.component';
import { C1Q2Component } from './components/c1-q2/c1-q2.component';
import { C1Q3Component } from './components/c1-q3/c1-q3.component';
import { C1Q4Component } from './components/c1-q4/c1-q4.component';
import { C1Q5Component } from './components/c1-q5/c1-q5.component';
import { C1Q6Component } from './components/c1-q6/c1-q6.component';
import { C1Q7Component } from './components/c1-q7/c1-q7.component';
import { C1Q8Component } from './components/c1-q8/c1-q8.component';
import { C1Q9Component } from './components/c1-q9/c1-q9.component';
import { C1Q10Component } from './components/c1-q10/c1-q10.component';
import { C2Q1Component } from './components/c2-q1/c2-q1.component';
import { C2Q2Component } from './components/c2-q2/c2-q2.component';
import { C2Q3Component } from './components/c2-q3/c2-q3.component';
import { C2Q4Component } from './components/c2-q4/c2-q4.component';
import { C2Q5Component } from './components/c2-q5/c2-q5.component';
import { C2Q6Component } from './components/c2-q6/c2-q6.component';
import { C2Q7Component } from './components/c2-q7/c2-q7.component';
import { C2Q8Component } from './components/c2-q8/c2-q8.component';
import { C2Q9Component } from './components/c2-q9/c2-q9.component';
import { C210Component } from './components/c210/c210.component';
import { C2Q11Component } from './components/c2-q11/c2-q11.component';
import { C2Q12Component } from './components/c2-q12/c2-q12.component';
import { C2Q13Component } from './components/c2-q13/c2-q13.component';
import { FotoComponent } from './components/foto/foto.component';
import { ResultComponent } from './components/result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    QuestionComponent,
    C1Q1Component,
    C1Q2Component,
    C1Q3Component,
    C1Q4Component,
    C1Q5Component,
    C1Q6Component,
    C1Q7Component,
    C1Q8Component,
    C1Q9Component,
    C1Q10Component,
    C2Q1Component,
    C2Q2Component,
    C2Q3Component,
    C2Q4Component,
    C2Q5Component,
    C2Q6Component,
    C2Q7Component,
    C2Q8Component,
    C2Q9Component,
    C210Component,
    C2Q11Component,
    C2Q12Component,
    C2Q13Component,
    FotoComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
