import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteGuard } from './core/guards/route.guard';
import { AlunoComponent } from './modules/aluno/aluno.component';
import { LoginComponent } from './modules/login/login.component';
import { ProvaComponent } from './modules/prova/prova.component';

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'prova', component: ProvaComponent, canActivate: [RouteGuard] },
  { path: 'aluno', component: AlunoComponent, canActivate: [RouteGuard] },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
