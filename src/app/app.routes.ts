import { Routes } from '@angular/router';
import { CadastroProdutosComponent } from './components/pages/cadastro-produtos/cadastro-produtos.component';
import { ConsultaProdutosComponent } from './components/pages/consulta-produtos/consulta-produtos.component';
import { EdicaoProdutosComponent } from './components/pages/edicao-produtos/edicao-produtos.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';

// Confifuração das rotas do projeto
export const routes: Routes = [
    {
        path: 'pages/cadastro-produtos', //ROTA
        component: CadastroProdutosComponent //COMPONENTE
    },
    {
        path: 'pages/consulta-produtos', //ROTA
        component: ConsultaProdutosComponent //COMPONENTE
    },
    {
        path: 'pages/edicao-produtos/:id', //ROTA
        component: EdicaoProdutosComponent //COMPONENTE
    },
    {
        path: 'pages/dashboard', //ROTA
        component: DashboardComponent //COMPONENTE
    },
    {
        path: '', pathMatch : 'full', //pagina inicial do projeto
        redirectTo: 'pages/dashboard'
    }
];
