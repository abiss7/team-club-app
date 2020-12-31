import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { QuestionComponent } from './pages/question/question.component';
import { FotoComponent } from './components/foto/foto.component';
import { ResultComponent } from './components/result/result.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'question', component: QuestionComponent },
  { path: 'photos', component: FotoComponent },
  { path: 'results', component: ResultComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
