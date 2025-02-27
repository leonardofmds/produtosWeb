import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { endpoints } from '../../../configurations/environments';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edicao-produtos',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './edicao-produtos.component.html',
  styleUrl: './edicao-produtos.component.css'
})
export class EdicaoProdutosComponent {
  //atributos
  categorias: any[] = []; //array de objetos JSON
  mensagem: string = ''; //texto vazio
  produto: any = {}; //objeto JSON
  id: string = ''; //texto vazio

  //construtor
  constructor(private http: HttpClient, private route: ActivatedRoute) {
       
   }

  //função executada ao iniciar o componente
  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id') as string;

    //fazendo uma requisição GET para a API
    this.http.get(endpoints.consultar_categorias)
      .subscribe({ //aguardando o retorno da API
        next: (data) => { //capturando os dados obtidos
          //atribuindo os dados obtidos à variável categorias
          this.categorias = data as any[];
        }
      })

    this.http.get(`${endpoints.obter_produto}/${this.id}`)
      .subscribe({
        next: (data: any) => {
          console.log(data);
          this.produto = data;
          this.form.controls.nome.setValue(this.produto.nome);
          this.form.controls.preco.setValue(this.produto.preco);
          this.form.controls.quantidade.setValue(this.produto.quantidade);
          this.form.controls.categoriaId.setValue(this.produto.categoria.id);
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
      this.http.put(`${endpoints.atualizar_produto}/${this.id}`, this.form.value)
        .subscribe({ //aguardando o retorno da API
          next: (data: any) => { //capturando os dados obtidos
            this.mensagem = data.message; //capturando a mensagem de retorno
          }
        })

  }
}
