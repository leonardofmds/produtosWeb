//endereço da API local
const apiUrl = "http://localhost:8081";

//mapeamento dos endpoints
export const endpoints = {
    cadastrar_produto : `${apiUrl}/api/produtos/cadastrar`,
    atualizar_produto : `${apiUrl}/api/produtos/atualizar`,
    excluir_produto : `${apiUrl}/api/produtos/excluir`,
    consultar_produtos : `${apiUrl}/api/produtos/consultarPorNome`,
    obter_produto : `${apiUrl}/api/produtos/consultarPorId`,
    consultar_categorias : `${apiUrl}/api/categorias/consultar`,
    dashboard: `${apiUrl}/api/dashboard/totalProdutosPorCategoria`
};