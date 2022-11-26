import { Component, OnInit } from '@angular/core';

// creacion de interface, llave y tipo de dato
interface IregisterForm {
  nombre: String;
  email: String;
  mensaje: String;
}

@Component({
  selector: 'app-formtemplate',
  templateUrl: './formtemplate.component.html',
  styleUrls: ['./formtemplate.component.css']
})
export class FormtemplateComponent implements OnInit {

  user: IregisterForm = {
    nombre: "",
    email: "",
    mensaje: ""
  }

  submit() {
    console.log("Datos del vehiculo");
    console.log(
      this.user.nombre,
      this.user.email,
      this.user.mensaje,
    );

  }

  constructor() { }

  ngOnInit(): void {
  }

}
