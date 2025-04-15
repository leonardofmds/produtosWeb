import { HttpInterceptorFn } from "@angular/common/http";
import { apiProdutos } from "../configurations/environments";


/*
    Interceptador para enviar o TOKEN do usuário autenticado
    para autorizar os ENDPOINTS da API de produtos
*/
export const AuthInterceptor: HttpInterceptorFn = (req, next) => {

    //verificar se a requisicao feita pelo angular é para api de produtos
    if (req.url.includes(apiProdutos)) {
        //recuperar o usuario autenticado da session storage
        var data = sessionStorage.getItem('usuario') as string
        var json = JSON.parse(data);

        const request = req.clone({
            setHeaders: { Authorization: `Bearer ${json.token}` }
        });
        return next(request);       
    }
    return next(req);
};