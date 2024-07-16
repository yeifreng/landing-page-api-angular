import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  formularioContacto: FormGroup;

  constructor(private form: FormBuilder){
    this.formularioContacto = this.form.group({
      email:['', [Validators.required, Validators.email]],
      phone:['', Validators.required]
    })
  }

  enviar(event:Event){

    console.log(this.formularioContacto.value)

  }

  hasErrors(controlName:string, errorType:string){
    return this.formularioContacto.get(controlName)?.hasError(errorType) && this.formularioContacto.get(controlName)?.touched
  }

}
