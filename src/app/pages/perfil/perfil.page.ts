import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  usuario = {
    rut: "11.111.111-1",
    email: "jo.perez&#64;duocuc.cl",
    num: "123456789",
    name: " jose perez",
  }
  viajes_realizados = [
    {
      "fecha": "20/08/2024",
      "desde": "DuocUC",
      "hasta": "Talcahuano",
      "monto": 2990,
      "estado": "Realizado"
    },
    {
      "fecha": "22/08/2024",
      "desde": "DuocUC",
      "hasta": "Chiguayante",
      "monto": 4990,
      "estado": "Realizado"
    },
    {
      "fecha": "26/09/2024",
      "desde": "DuocUC",
      "hasta": "Lota",
      "monto": 6990,
      "estado": "Pendiente"
    }
  ]
  viajes_solicitados = [
    {
      "fecha": "20/08/2024",
      "desde": "DuocUC",
      "hasta": "Talcahuano",
      "monto": 2990,
      "estado": "Realizado",
      "conductor": "Moonie"
    },
    {
      "fecha": "22/08/2024",
      "desde": "DuocUC",
      "hasta": "Chiguayante",
      "monto": 4990,
      "estado": "Realizado",
      "conductor": "Pepito"
    },
    {
      "fecha": "26/09/2024",
      "desde": "DuocUC",
      "hasta": "Lota",
      "monto": 6990,
      "estado": "Pendiente",
      "conductor": "Wacoldo"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
