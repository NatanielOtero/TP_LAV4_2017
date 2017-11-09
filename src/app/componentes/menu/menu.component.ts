import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

  Juego(tipo: string) {
    switch (tipo) {
      case 'Adivina':
          this.router.navigate(['/Juegos/Adivina']);
        break;
        case 'Principal':
        this.router.navigate(['/Juegos/Principal']);
      break;
      case 'Agilidad':
          this.router.navigate(['/Juegos/Agilidad']);
        break;
        case 'Piedra':
        this.router.navigate(['/Juegos/Piedra']);
      break;
      case 'Anagrama':
      this.router.navigate(['/Juegos/Anagrama']);
    break;
    case 'Propio':
    this.router.navigate(['/Juegos/Propio']);
  break;
      case 'AdivinaMasListado':
          this.router.navigate(['/Juegos/AdivinaMasListado']);
        break;
      case 'AgilidadaMasListado':
          this.router.navigate(['/Juegos/AgilidadaMasListado']);
        break;
    }
  }

}
