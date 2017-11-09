import { Juego } from '../clases/juego'


export class JuegoPropio extends Juego {

    public cartas: number[];   
    public valorUser : number;
    public numero : number;

    constructor(nombre?: string, gano?: boolean, jugador?: string) {
        super("Memotest", gano, jugador);

        this.cartas = new Array<number>();
        this.valorUser=0;
        this.numero = 0;
     

    }

    jugar()
    {
        this.cartas.push( Math.floor((Math.random() * 13) + 1));      
        
    }
    
    cortar()
    {
        this.valorUser = 0;
        for (var i = 0; i < this.cartas.length; i++)
         {      
            console.log(this.valorUser);
            this.valorUser = this.valorUser  + this.cartas[i];
            console.log(this.valorUser);
            console.log(this.cartas);
            console.log(this.cartas[i]);
        }  
            if(this.valorUser < 21)
            {
                this.numero = Math.floor((Math.random() * 13) + 1);
                if(this.valorUser + this.numero == 21)
                {
                    return "Mal, hubieras ganado";
                }
                else{
                    if(this.valorUser + this.numero > 21){
                        return "Bien, hubieras perdido";
                    }
                    else{
                        return "Mal, podias seguir";
                    }
                }
            }     
        
       
    }

    public verificar() : string {
        this.valorUser = 0;
        for (var i = 0; i < this.cartas.length; i++) {       
            this.valorUser  += this.cartas[i];
            if(this.valorUser == 21)
            {
                return "gano";
            }
            if(this.valorUser > 21)
            {
                return "perdio";
            }
        }     
        
        
        
       
         

          
    
    }

}