import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  varString:string = "El sapo Pepe";
  arreglo:string[]=["uno", "dos", "tres", "cuatro", "cinco"];
  numero:number = 123.456789;
  numero2:number = 3;
  numero3:number = 0.246;
  guita: number = 35054;
  fecha: Date=new Date();
  texto2:string="HOla RePUTo MUndo";
  booleana: boolean;
  estilo:number = 20;

  cambiador(){
    if (this.booleana){
      this.booleana=false;
    } else {
      this.booleana=true;
    }
    console.log(this.booleana);
  }

  aumentador(){
    this.estilo = this.estilo + 5;
  }
  achicador(){
    this.estilo = this.estilo - 5;
  }

  tipo = "success";
}
