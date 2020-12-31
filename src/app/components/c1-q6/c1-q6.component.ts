import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-c1-q6',
  templateUrl: './c1-q6.component.html',
  styleUrls: ['./c1-q6.component.scss']
})
export class C1Q6Component implements OnInit {

  @Output() continuar = new EventEmitter();
  formGroup: FormGroup;
  errores = 0;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    this.formGroup = this.formBuilder.group({
      question: [ '', Validators.required ]
    });
  }

  continue(event) {
    
    event.preventDefault();

    const respuesta = this.formGroup.get('question').value;
    if ( respuesta !== 'Notificaciones GEO' ) {

      Swal.fire({
        title: 'nah nah nah! Tu respuesta no es correcta',
        text: 'Intentalo de nuevo!!!',
        allowOutsideClick: true,
        showConfirmButton: true,
        icon: 'error'
      });

      this.errores++;
    }
    else {

      this.continuar.emit( { pageNumber: 7, response: { pregunta: 'Qué dejó de andar hasta el día de hoy?', respuesta, errores: this.errores } });
    }

  }

}
