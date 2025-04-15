import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    CommonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  usuario: any = null;

  ngOnInit(){
    var data = sessionStorage.getItem('usuario') as string;

    if(data!=null){
      this.usuario = JSON.parse(data);
    }
  }

  logout(){
    sessionStorage.removeItem('usuario');
    location.href='/';
  }

}
