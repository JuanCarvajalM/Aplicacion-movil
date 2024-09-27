import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  credenciales={
    email:'',
    password:'',
    nombre:''
  }
  error:boolean = false;
  alertButtons = ['Cerrar'];

  constructor( private router: Router) { }

  ngOnInit() {
  }
  registrar(){
    if(this.credenciales.email != '' && this.credenciales.password != '' && this.credenciales.nombre != ''){
      this.router.navigate(['/home']);
    }
    else{
      this.mostrarerror();
    }
    console.log(this.credenciales);
  }
  mostrarerror(){
    this.error = !this.error;
    
  }
}
