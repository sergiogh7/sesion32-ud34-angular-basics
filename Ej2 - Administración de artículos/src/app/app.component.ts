import { Component } from '@angular/core';
import { SelectMultipleControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  art={
    codigo:0,
    descripcion:'',
    precio:0
  }

  articulos = [{codigo:1, descripcion:'papas', precio:10.55},
               {codigo:2, descripcion:'manzanas', precio:12.10},
               {codigo:3, descripcion:'melon', precio:52.30},
               {codigo:4, descripcion:'cebollas', precio:17},
               {codigo:5, descripcion:'calabaza', precio:20},];

  hayRegistros() {
    return this.articulos.length>0;

  }

  borrar(art: {codigo: number; descripcion: string; precio: number; }) {
    for(let x=0;x<this.articulos.length;x++)
      if (this.articulos[x].codigo==art.codigo)
      {
        this.articulos.splice(x,1);
        return;
      }
  }

  // Funcion que recibe un objeto y añade el codigo actual del
  // objeto seleccionado para mostrarlo en los inputs.
  seleccionar(art: { codigo: number; descripcion: string; precio: number; }) {
    this.art.codigo=art.codigo;
    this.art.descripcion=art.descripcion;
    this.art.precio=art.precio;

  }

  agregar() {
    for(let x=0;x<this.articulos.length;x++)

    if (this.articulos[x].codigo==this.art.codigo){
      alert('ERROR: ya existe un articulo con el mismo codigo!');
      return;
    }

    this.articulos.push({codigo:this.art.codigo,
                         descripcion:this.art.descripcion,
                         precio:this.art.precio });

    this.art.codigo=0;
    this.art.descripcion='';
    this.art.precio=0;
  }

  modificar() {
    for(let x=0;x<this.articulos.length;x++)

      if (this.articulos[x].codigo==this.art.codigo){
        this.articulos[x].descripcion=this.art.descripcion;
        this.articulos[x].precio=this.art.precio;

        return;
      }

    alert('ERROR: No existe el codigo de articulo añadido!');

  }

}
