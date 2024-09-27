import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  viajes = [
    { 
        "fecha": "20/08/2024",
        "desde": "DuocUC",
        "hasta": "Talcahuano",
        "monto": 2990,
        "conductor": "Moonie"
    },
    { 
        "fecha": "22/08/2024",
        "desde": "DuocUC",
        "hasta": "Chiguayante",
        "monto": 4990,
        "conductor": "Pepito"
    },
    { 
        "fecha": "26/09/2024",
        "desde": "DuocUC",
        "hasta": "Lota",
        "monto": 6990,
        "conductor": "Wacoldo"
    }
]
  constructor() {}

}
