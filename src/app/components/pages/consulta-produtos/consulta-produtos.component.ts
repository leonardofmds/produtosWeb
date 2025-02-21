import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-consulta-produtos',
  imports: [
    CommonModule, //diretivas básicas de componente do angular
    FormsModule, //diretivas de formulário do angular
    ReactiveFormsModule //diretivas de formulário reativo do angular
  ],
  templateUrl: './consulta-produtos.component.html',
  styleUrl: './consulta-produtos.component.css'
})
export class ConsultaProdutosComponent {

  produtos: any[] = []; //array de produtos
  mensagem: string = ''; //mensagem de erro ou sucesso
  

  constructor(private http: HttpClient) { 

  }

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
    this.http.get('http://localhost:8081/api/produtos/consultarPorNome/' + this.form.value.nome)
      .subscribe({ //aguardando o retorno da API
        next: (data) => { //capturando a resposta
          this.produtos = data as any[]; //atribuindo a resposta ao array de produtos
          this.mensagem = `Quantidade de registros encontrados: ${this.produtos.length}`; //mensagem de sucesso
        }
      })
  }
}




