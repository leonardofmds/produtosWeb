import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { endpoints } from '../../../configurations/environments';

@Component({
  selector: 'app-criar-usuario',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './criar-usuario.component.html',
  styleUrl: './criar-usuario.component.css'
})
export class CriarUsuarioComponent {

  mensagemSucesso: string = '';
  mensagemErro: string = ''; 

  constructor(private http: HttpClient) { 

  }

  form = new FormGroup({
    nome: new FormControl('',[Validators.required, Validators.minLength(8)]),
    email: new FormControl('',[Validators.required, Validators.email]),
    senha: new FormControl('',[Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]),
    senhaConfirmacao: new FormControl('',[Validators.required])
  })

  //funcao auxiliar para verioficar se os campos estão válidos
  get f(){
    return this.form.controls;
  }

  onSubmit(){
    this.mensagemErro = '';
    this.mensagemSucesso = '';

    if(this.form.value.senha == this.form.value.senhaConfirmacao){

      this.http.post(endpoints.criar_usuario, this.form.value)
        .subscribe({
          next: (data: any) => {
            this.mensagemSucesso = `${data.nome}, seu cadastro foi realizado com sucesso!`;
            this.form.reset();


          },
          error: (error) => {
            console.log(error);
            this.mensagemErro = error.error;
          }
        });
    }
    else{
      this.mensagemErro = 'As senhas não conferem, por favor verifique';
    }
    
    

  }



}
