import { ResultadoQuizComponent } from './components/resultado-quiz/resultado-quiz.component';
import { ListarLoucasComponent } from './components/listar-loucas/listar-loucas.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './components/contato/contato.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { CadastroLoginComponent } from './components/cadastro-login/cadastro-login.component';
import { HomeComponent } from './components/home/home.component';
import { CadastroProdutoComponent } from './components/cadastro-produto/cadastro-produto.component';
import { ListarPisosComponent } from './components/listar-pisos/listar-pisos.component';
import { ListarArgamassasComponent } from './components/listar-argamassas/listar-argamassas.component';
import { ListarGabinetesComponent } from './components/listar-gabinetes/listar-gabinetes.component';
import { ListarTorneirasComponent } from './components/listar-torneiras/listar-torneiras.component';
import { ListarIluminacoesComponent } from './components/listar-iluminacoes/listar-iluminacoes.component';
import { ListarProdutoComponent } from './components/listar-produto/listar-produto.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { EditarProdutoComponent } from './components/editar-produto/editar-produto.component';

const routes: Routes = [
  {path: 'login', component: UsuarioComponent},
  {path: 'contato', component: ContatoComponent},
  {path: 'quiz', component: QuizComponent},
  {path: 'cadastroLogin', component: CadastroLoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'cadastroProduto', component: CadastroProdutoComponent},
  {path: 'listarPisos', component: ListarPisosComponent},
  {path: 'listarArgamassas', component: ListarArgamassasComponent},
  {path: 'listarLoucas', component: ListarLoucasComponent},
  {path: 'listarGabinetes', component: ListarGabinetesComponent},
  {path: 'listarTorneiras', component: ListarTorneirasComponent},
  {path: 'listarIluminacoes', component: ListarIluminacoesComponent},
  {path: 'listarProduto/:id', component: ListarProdutoComponent},
  {path: 'editarProduto/:id', component: EditarProdutoComponent},
  {path: 'carrinho', component: CarrinhoComponent},
  {path: 'resultado', component: ResultadoQuizComponent},
  {path: 'contato', component: ContatoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
