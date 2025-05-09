import { UsuarioComponent } from './components/usuario/usuario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './components/contato/contato.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { CadastroLoginComponent } from './components/cadastro-login/cadastro-login.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: 'login', component: UsuarioComponent},
  {path: 'contato', component: ContatoComponent},
  {path: 'quiz', component: QuizComponent},
  {path: 'cadastroLogin', component: CadastroLoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'contato', component: ContatoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
