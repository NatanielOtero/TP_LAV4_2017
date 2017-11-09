import { JuegoPropio } from '../../clases/juego-propio';
import { Component, Inject, OnInit } from '@angular/core';


@Component({
  selector: 'app-juego-propio',
  templateUrl: './juego-propio.component.html',
  styleUrls: ['./juego-propio.component.css']
})
export class JuegoPropioComponent implements OnInit {

  juego : JuegoPropio;
  resultado : any;
  jugo :boolean = false;
  mostrar :boolean = true;
  jugando : boolean = true;
  corto : boolean = true;
  nuevo : boolean = true;
  constructor() {
    this.juego = new JuegoPropio();
    

   }

  ngOnInit() {

  }
  
  mas()
  {
    this.juego.jugar();
    
      this.resultado= this.juego.verificar();
      if(this.resultado == "gano" || this.resultado =="perdio")
      {
        this.corto = false;
        this.jugando = true;
        this.nuevo = false;
      }
    
    
    console.log(this.juego);

  }
  cortar()
  {
      this.nuevo = false;
      this.jugando = true;
      this.corto = false;
      this.resultado= this.juego.cortar();
      console.log(this.juego);
      console.log(this.resultado);
  }

  

  jugar()
  {
    
    this.corto = true;
    this.resultado = "";
    this.nuevo = true;
    this.jugo = true;
    this.jugando = false;
    this.juego = new JuegoPropio();
    this.juego.jugar();
    this.juego.jugar();   
    this.resultado= this.juego.verificar();
    if(this.resultado == "gano" || this.resultado =="perdio")
    {
      this.corto = false;
      this.jugando = true;
      this.nuevo = false;
    }
    console.log(this.juego);
    
    this.mostrar = false;
    
  }
  

}

