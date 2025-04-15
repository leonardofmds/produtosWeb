//endereço da API local
export const apiProdutos = "http://localhost:8081";
export const apiUsuarios = 'http://localhost:8082';

//mapeamento dos endpoints
export const endpoints = {
    cadastrar_produto : `${apiProdutos}/api/produtos/cadastrar`,
    atualizar_produto : `${apiProdutos}/api/produtos/atualizar`,
    excluir_produto : `${apiProdutos}/api/produtos/excluir`,
    consultar_produtos : `${apiProdutos}/api/produtos/consultarPorNome`,
    obter_produto : `${apiProdutos}/api/produtos/consultarPorId`,
    consultar_categorias : `${apiProdutos}/api/categorias/consultar`,
    dashboard: `${apiProdutos}/api/dashboard/totalProdutosPorCategoria`,

    criar_usuario: `${apiUsuarios}/api/usuario/criar`,
    autenticar_usuario: `${apiUsuarios}/api/usuario/autenticar`
};