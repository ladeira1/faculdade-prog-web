import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';
import { ProvaComponent } from './modules/prova/prova.component';
import { AlunoComponent } from './modules/aluno/aluno.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProvaComponent,
    AlunoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
