import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Validators, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro-produtos',
  imports: [
    CommonModule,
    FormsModule, //biblioteca de formularios
    ReactiveFormsModule //biblioteca de formularios reativos
  ],
  templateUrl: './cadastro-produtos.component.html',
  styleUrl: './cadastro-produtos.component.css'
})
export class CadastroProdutosComponent {

  //declaracao de atributos
  categorias : any=[]; //array de objetos
  mensagem: string = '';

  constructor(private http: HttpClient){

  }

  //funcao executada ao iniciar o componente
  ngOnInit(){
    //fazendo uma rfequisicao GET para a API 
    this.http.get('http://localhost:8081/api/categorias/consultar').subscribe({
      next: (data) =>{
       //atribuindo os dados obtidos a variavel categorias
        this.categorias= data as any[];
      }
    })
  }

  //declarando o formulario
  form = new FormGroup({
    nome: new FormControl('',[
      Validators.required, Validators.minLength(8), Validators.maxLength(100)
    ]),
    preco: new FormControl('',[
      Validators.required, Validators.min(0.01)
    ]),
    quantidade: new FormControl('',[
      Validators.required, Validators.min(0)
    ]),
    categoriaId: new FormControl('',[
      Validators.required
    ]),
  })

  //funcao auxiliar para verificar se cada campo foi preenchido corretamente
  get f(){
    return this.form.controls;
  }

  //funcao para capturar o evento submit do formulario
  onSubmit(){
    //fazendo uma requisicao POST para o endpoint de cadastro de produtos da API
    this.http.post("http://localhost:8081/api/produtos/cadastrar", this.form.value)
      .subscribe({
        next: (data: any) => {
          this.mensagem = data.message;
          this.form.reset();
        }
      })
  }

}
