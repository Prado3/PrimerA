import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
})
export class EmpleadoComponent implements OnInit {

  nombre="Juan";
  apellido="Diaz";
  edad=18;
  //empresa="Nashe"

  /*getEdad(){
    return this.edad;
  }*/

  //llamaEmpresa(value:String){}

  habilitacionCuadro=true;

  usuRegistrado=false;

  getRegistroUsuario(){
    this.usuRegistrado=true;
  }

  constructor(){}

  ngOnInit(): void {  }
}
