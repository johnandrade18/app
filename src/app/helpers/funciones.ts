import { FormGroup } from "@angular/forms"
export class functions {
  // Funcion para validar los campos del formulario
      static invalidField(field: string, formulario:FormGroup, formSubmitted:boolean): boolean {
        if (formSubmitted && formulario.controls[field].invalid) {
          return true
        }else {
          return false
        }
      }
}
