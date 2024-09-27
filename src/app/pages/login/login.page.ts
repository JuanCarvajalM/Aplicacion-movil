import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credenciales={
    email:'',
    password:''
  }
  error:boolean = false;
  alertButtons = ['Cerrar'];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(){
    if(this.credenciales.email != '' && this.credenciales.password != ''){
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
