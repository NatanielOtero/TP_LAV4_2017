import { Component, OnInit } from '@angular/core';
import { JuegoAnagrama } from "../../clases/juego-anagrama";

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {

  nuevoJuego : JuegoAnagrama;
  palabraDesordenada : string;
  palabraIngresada : string;
  resultado : string;
 mostrar : boolean = true;
 boton : boolean = true;
  constructor() 
  {
    this.nuevoJuego = new JuegoAnagrama();
  }

  generarPalabra()
  {
    this.resultado = null;
    this.palabraDesordenada = this.nuevoJuego.generarPalabra();
    this.mostrar = false;
  }
  validar()
  {
    if(this.palabraIngresada != null || this.palabraIngresada != "")
    {
      this.boton = false;
    }
     
   
  
     
  }
  jugar()
  {
    if(this.palabraIngresada != null)
    {
      this.nuevoJuego.jugar(this.palabraIngresada);
      this.resultado =this.nuevoJuego.verificar();
    }
    else
    {
      this.resultado = "Ingresa una respuesta";
    }
    
    
    if(this.resultado != null )
    {
      this.palabraIngresada = "";
      this.mostrar = true;
    }
    this.boton = true;
  }

  ngOnInit() {
    //this.palabraDesordenada = this.nuevoJuego.generarPalabra();
  }

}
