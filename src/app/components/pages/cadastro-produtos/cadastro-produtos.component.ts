import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { endpoints } from '../../../configurations/environments';

@Component({
  selector: 'app-cadastro-produtos',
  imports: [
    CommonModule, //biblioteca de componentes comuns
    FormsModule, //biblioteca de formulários
    ReactiveFormsModule //biblioteca de formulários reativos
  ],
  templateUrl: './cadastro-produtos.component.html',
  styleUrl: './cadastro-produtos.component.css'
})
export class CadastroProdutosComponent {

  //atributos
  categorias: any[] = []; //array de objetos JSON
  mensagem: string = ''; //texto vazio

  //construtor
  constructor(private http: HttpClient) { }

  //função executada ao iniciar o componente
  ngOnInit() {

    //fazendo uma requisição GET para a API
    this.http.get(endpoints.consultar_categorias)
      .subscribe({ //aguardando o retorno da API
        next: (data) => { //capturando os dados obtidos
          //atribuindo os dados obtidos à variável categorias
          this.categorias = data as any[];
        }
      })
  }

  //declarando o formulário
  form = new FormGroup({
    nome : new FormControl('', [
      Validators.required, Validators.minLength(8), Validators.maxLength(100)
    ]),
    preco : new FormControl('', [
      Validators.required, Validators.min(0.01)
    ]),
    quantidade : new FormControl('', [
      Validators.required, Validators.min(0)
    ]),
    categoriaId : new FormControl('', [
      Validators.required
    ])
  });

  //função auxiliar para verificar se cada foi preenchido corretamente
  get f() {
    return this.form.controls;
  }

  //função para capturar o evento SUBMIT do formulário
  onSubmit() {
    
    //fazendo uma requisição POST para o endpoint de cadastro de produtos
    this.http.post(endpoints.cadastrar_produto, this.form.value)
      .subscribe({ //aguardando o retorno da API
        next: (data: any) => { //capturando os dados obtidos
          this.mensagem = data.message; //capturando a mensagem de retorno
          this.form.reset(); //limpando o formulário
        }
      })
  }

}
