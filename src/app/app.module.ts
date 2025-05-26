import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { ContatoComponent } from './components/contato/contato.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { CadastroLoginComponent } from './components/cadastro-login/cadastro-login.component';
import { HomeComponent } from './components/home/home.component';
import { CadastroProdutoComponent } from './components/cadastro-produto/cadastro-produto.component';
import { ListarPisosComponent } from './components/listar-pisos/listar-pisos.component';
import { ListarArgamassasComponent } from './components/listar-argamassas/listar-argamassas.component';
import { ListarLoucasComponent } from './components/listar-loucas/listar-loucas.component';
import { ListarGabinetesComponent } from './components/listar-gabinetes/listar-gabinetes.component';
import { ListarTorneirasComponent } from './components/listar-torneiras/listar-torneiras.component';
import { ListarIluminacoesComponent } from './components/listar-iluminacoes/listar-iluminacoes.component';
import { ListarProdutoComponent } from './components/listar-produto/listar-produto.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { EditarProdutoComponent } from './components/editar-produto/editar-produto.component';
import { FormsModule } from '@angular/forms';
import { ResultadoQuizComponent } from './components/resultado-quiz/resultado-quiz.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    UsuarioComponent,
    ContatoComponent,
    QuizComponent,
    CadastroLoginComponent,
    HomeComponent,
    CadastroProdutoComponent,
    ListarPisosComponent,
    ListarArgamassasComponent,
    ListarLoucasComponent,
    ListarGabinetesComponent,
    ListarTorneirasComponent,
    ListarIluminacoesComponent,
    ListarProdutoComponent,
    CarrinhoComponent,
    EditarProdutoComponent,
    ResultadoQuizComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
