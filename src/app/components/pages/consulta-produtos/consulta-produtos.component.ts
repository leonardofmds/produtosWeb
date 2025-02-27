import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { endpoints } from '../../../configurations/environments';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-consulta-produtos',
  imports: [
    CommonModule, //diretivas básicas de componente do angular
    FormsModule, //diretivas de formulário do angular
    ReactiveFormsModule, //diretivas de formulário reativo do angular
    RouterLink //navegação de rotas do angular
  ],
  templateUrl: './consulta-produtos.component.html',
  styleUrl: './consulta-produtos.component.css'
})
export class ConsultaProdutosComponent {

  //atributos
  produtos: any[] = []; //array de objetos JSON
  mensagem: string = ''; //texto vazio

  //método construtor
  constructor(private http: HttpClient) { }

  //criando o formulário
  form = new FormGroup({
    nome : new FormControl('', [Validators.required, Validators.minLength(3)]),
  });  

  //método para verificar se os campos estão com erro
  get f() {
    return this.form.controls;
  }

  //método para enviar o formulário
  onSubmit() {

    //fazendo uma requisição de consulta para a API (GET)
    this.http.get(`${endpoints.consultar_produtos}/${this.form.value.nome}`)
      .subscribe({ //aguardando o retorno da API
        next: (data) => { //capturando a resposta
          this.produtos = data as any[];
          this.mensagem = `Quantidade de registros encontrados: ${this.produtos.length}`;
        }
      })
  }

  //método para quando o usuário clicar no botão de exclusão
  onDelete(id: string) {

    if(confirm('Deseja realmente excluir o produto selecionado?')) {
      //fazendo a chamada para o serviço de exclusão da API
      this.http.delete(`${endpoints.excluir_produto}/${id}`)
        .subscribe({  //aguardando a resposta
          next: (data: any) => { //capturando a resposta de sucesso
            this.mensagem = data.message; //exibindo a mensagem obtida da API    
            //remover o produto da lista 
            //manter somente os que tem o id diferente do que foi excluido
            this.produtos = this.produtos.filter(produto => produto.id !== id);        
          }
        })
    }
  }
}
