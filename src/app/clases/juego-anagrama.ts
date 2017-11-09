import { Juego } from '../clases/juego'


export class JuegoAnagrama extends Juego   
{

    arrayDePalabras : string[] = ["Tomate","Rusia","Gato","Inutil","Mouse","Teclado","Pendrive","Pajaro"];
    palabraDesordenada : string = "";
    palabraOrdenada : string;
    resultado : string;

    constructor(nombre?: string, gano?: boolean, jugador?:string)
    {
        super("Anagrama",gano,jugador);
        
    }

    public generarPalabra() 
    {
      var numero = Math.floor((Math.random() * 6) + 1);
      console.info('Palabra desordenada: ' + this.arrayDePalabras[numero]);
      this.palabraOrdenada = this.arrayDePalabras[numero];
      this.gano = false;
      
      this.palabraDesordenada = this.palabraOrdenada.split("").sort().join("");

      return this.palabraDesordenada;
    }

    public jugar(palabraIngresada)
    {
        if(this.palabraOrdenada.toLowerCase() == palabraIngresada.toLowerCase())
        {
            this.resultado = "¡Adivinaste la palabra!";
        }
        else
        {
            this.resultado = "¡Le erraste, la próxima será!";
        }
    }

    public verificar()
    {
        return this.resultado;
    }

}
