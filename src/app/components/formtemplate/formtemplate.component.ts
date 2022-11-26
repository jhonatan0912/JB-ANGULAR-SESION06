import { Component, OnInit } from '@angular/core';

// creacion de interface, llave y tipo de dato
interface IregisterForm {
  dni: String;
  nombre: String;
  direccion: String;
  edad: String | Number;
  celular: String;
  cargo: String;
  sexo: String;
  sueldo: String;
}

@Component({
  selector: 'app-formtemplate',
  templateUrl: './formtemplate.component.html',
  styleUrls: ['./formtemplate.component.css']
})
export class FormtemplateComponent implements OnInit {

  user: IregisterForm = {
    dni: "",
    nombre: "",
    direccion: "",
    edad: "",
    celular: "",
    cargo: "",
    sexo: "",
    sueldo: ""
  }

  submit() {
    console.log("Datos del vehiculo");
    console.log(
      this.user.dni,
      this.user.nombre,
      this.user.direccion,
      this.user.edad,
      this.user.celular,
      this.user.cargo,
      this.user.sexo,
      this.user.sueldo
    );
    console.log(this.user);

  }

  constructor() { }

  ngOnInit(): void {
  }

}
