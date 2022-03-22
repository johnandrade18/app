import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { functions } from '../../helpers/funciones';
import { Ilogin } from '../../interface/ilogin';
import { LoginService } from '../../services/login.service';
import { alerts } from '../../helpers/alerts';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // Expresiones regulares
  regex = new RegExp('^[0-9]+$')

  // Creamos los controles del formulario con sus respectivas validaciones
  public formulario = this.form.group({
    identificacion: ['', [Validators.required, Validators.pattern(this.regex)]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  // Variables para saber si el formulario ha sido enviado
  formSubmitted = false;

  // Constructor
  constructor(private form: FormBuilder, private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    
  }

  // Funcion login para enviar los datos del formulario al servicio
  login() {
    this.formSubmitted = true
    // Validamos el formulario para saber si esta correcto
    if (this.formulario.invalid) {
      return
    }
    // Capturamos la información del formulario en la interface Ilogin
    const data: Ilogin = {
      identificacion: this.formulario.value.identificacion,
      password: this.formulario.value.password
    }
    this.loginService.login(data).subscribe(
      () => {
        // Si el login es correcto, redireccionamos al home
        this.router.navigateByUrl('/dashboard')
      },
      () => {
        // Si el login es incorrecto, mostramos un mensaje de error
        alerts.basicAlert('error', 'Error', 'Usuario o contraseña incorrectos')
      }
    )
  }

  // Funcion para mostrar mensajes de error
  invalidField(field: string) {
    return functions.invalidField(field, this.formulario, this.formSubmitted)
  }
}
