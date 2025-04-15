import { Routes } from '@angular/router';
import { CadastroProdutosComponent } from './components/pages/cadastro-produtos/cadastro-produtos.component';
import { ConsultaProdutosComponent } from './components/pages/consulta-produtos/consulta-produtos.component';
import { EdicaoProdutosComponent } from './components/pages/edicao-produtos/edicao-produtos.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { AutenticarUsuarioComponent } from './components/pages/autenticar-usuario/autenticar-usuario.component';
import { CriarUsuarioComponent } from './components/pages/criar-usuario/criar-usuario.component';
import { AuthGuard } from './guards/auth.guard';

// Confifuração das rotas do projeto
export const routes: Routes = [
    {
        path: 'pages/autenticar-usuario', //ROTA
        component: AutenticarUsuarioComponent //COMPONENTE
    },
    {
        path: 'pages/criar-usuario', //ROTA
        component: CriarUsuarioComponent //COMPONENTE
    },
    {
        path: 'pages/cadastro-produtos', //ROTA
        component: CadastroProdutosComponent, //COMPONENTE
        canActivate: [AuthGuard] //GUARD
    },
    {
        path: 'pages/consulta-produtos', //ROTA
        component: ConsultaProdutosComponent, //COMPONENTE
        canActivate: [AuthGuard] //GUARD
    },
    {
        path: 'pages/edicao-produtos/:id', //ROTA
        component: EdicaoProdutosComponent, //COMPONENTE
        canActivate: [AuthGuard] //GUARD
    },
    {
        path: 'pages/dashboard', //ROTA
        component: DashboardComponent, //COMPONENTE
        canActivate: [AuthGuard] //GUARD
    },
    {
        path: '', pathMatch : 'full', //pagina inicial do projeto
        redirectTo: 'pages/autenticar-usuario'
    }
];
