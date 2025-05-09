import { UsuarioComponent } from './components/usuario/usuario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './components/contato/contato.component';
import { QuizComponent } from './components/quiz/quiz.component';

const routes: Routes = [
  {path: 'usuario', component: UsuarioComponent},
  {path: 'contato', component: ContatoComponent},
  {path: 'quiz', component: QuizComponent},
  {path: 'contato', component: ContatoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
