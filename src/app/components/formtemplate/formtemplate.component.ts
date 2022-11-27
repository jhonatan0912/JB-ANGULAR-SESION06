import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

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

  control: any;
  validEmail: any
  validMessage: any
  submit() {
    this.validEmail = this.control = new FormControl(this.user.email, Validators.email);
    this.control = new FormControl(this.user.nombre, Validators.required);
    this.control = new FormControl(this.user.email, Validators.required);
    this.validMessage = this.control = new FormControl(this.user.mensaje, Validators.required);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
