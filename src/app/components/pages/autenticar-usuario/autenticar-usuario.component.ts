import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { endpoints } from '../../../configurations/environments';

@Component({
  selector: 'app-autenticar-usuario',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './autenticar-usuario.component.html',
  styleUrl: './autenticar-usuario.component.css'
})
export class AutenticarUsuarioComponent {

  msgErro: string = '';

  constructor(private http:HttpClient) { }

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    //console.log(this.form.value);

    this.http.post(endpoints.autenticar_usuario, this.form.value)
      .subscribe({
        next: (data: any) => {
          //salva as informações do usuario autenticado em uma session storage
          sessionStorage.setItem('usuario', JSON.stringify(data));
          //redireciona para a página de dashboard
          location.href = `/pages/dashboard`;
        },
        error: (error) => {
          console.log(error);
          this.msgErro = error.error;
        }
      });
  }

}
