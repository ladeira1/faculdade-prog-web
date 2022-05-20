import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunoComponent } from './modules/aluno/aluno.component';
import { LoginComponent } from './modules/login/login.component';
import { ProvaComponent } from './modules/prova/prova.component';

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'prova', component: ProvaComponent },
  { path: 'aluno', component: AlunoComponent },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
