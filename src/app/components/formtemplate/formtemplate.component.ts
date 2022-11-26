import { Component, OnInit } from '@angular/core';

// creacion de interface, llave y tipo de dato
interface IregisterForm {
  placa: String;
  marca: String;
  modelo: String;
  precio: Number | String;
  color: String;
  fabricacion: Number | String;
}

@Component({
  selector: 'app-formtemplate',
  templateUrl: './formtemplate.component.html',
  styleUrls: ['./formtemplate.component.css']
})
export class FormtemplateComponent implements OnInit {

  register: IregisterForm = {
    placa: "",
    marca: "",
    modelo: "",
    precio: "",
    color: "",
    fabricacion: ""
  }

  submit() {
    console.log("Datos del vehiculo");
    console.log(
      this.register.placa,
      this.register.marca,
      this.register.modelo,
      this.register.precio,
      this.register.color,
      this.register.fabricacion
    );

  }

  constructor() { }

  ngOnInit(): void {
  }

}
