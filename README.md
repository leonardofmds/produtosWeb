# produtosWeb

`produtosWeb` é uma aplicação frontend desenvolvida com **Angular**, criada para consumir APIs de **produtos** e **usuários** construídas com **Java**. O projeto utiliza **componentes reutilizáveis**, **formulários reativos**, **navegação por rotas**, **interceptadores**, **guards de rotas**, **gráficos com Highcharts**, além do framework **Bootstrap** para estilização responsiva.

## 🚀 Funcionalidades

- Cadastro, edição e visualização de produtos
- Autenticação de usuários
- Navegação protegida por autenticação (guards)
- Dashboard com gráficos dinâmicos
- Comunicação com APIs externas via HTTP
- Interface responsiva com Bootstrap

## 🧱 Tecnologias Utilizadas

### ✅ Angular
Framework para construção de SPAs (Single Page Applications). Utilizado para a criação de toda a estrutura do frontend, com suporte a módulos, componentes, serviços e injeção de dependência.

### ✅ Componentes
Reutilização de trechos de UI de forma isolada e testável. Cada funcionalidade ou página da aplicação está representada em um componente Angular.

### ✅ Rotas (RouterModule)
Permite navegação entre diferentes views da aplicação, usando o sistema de rotas do Angular. Cada rota está vinculada a um componente.

### ✅ Formulários Reativos (ReactiveFormsModule)
Utilizados para criar e controlar formulários de forma dinâmica e programática, com validações e manipulação de estados via código.

### ✅ HttpClient
Cliente HTTP embutido no Angular que permite consumir APIs RESTful com suporte a interceptadores, headers, parâmetros, etc.

### ✅ Interceptors
Interceptadores de requisições HTTP utilizados para adicionar tokens de autenticação ou tratar erros globalmente.

### ✅ Guards
Protetores de rota que controlam o acesso a determinadas páginas, garantindo que apenas usuários autenticados possam acessá-las.

### ✅ Highcharts
Biblioteca JavaScript de gráficos interativos. Utilizada na construção de dashboards visuais com informações extraídas das APIs.

### ✅ Bootstrap
Framework CSS utilizado para criar uma interface responsiva, moderna e com componentes visuais prontos para uso.

## 🌐 Integração com APIs Java

Este frontend Angular consome duas APIs backend desenvolvidas com **Java** e **Spring Boot**:

- ✅ **API de Produtos** – Gerencia o cadastro, atualização, remoção e listagem de produtos
- ✅ **API de Usuários** – Responsável pelo registro, autenticação e controle de acesso de usuários



