import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-c1-q4',
  templateUrl: './c1-q4.component.html',
  styleUrls: ['./c1-q4.component.scss']
})
export class C1Q4Component implements OnInit {

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
    if ( respuesta !== 'Rodrigo Onetto, Rodrigo Cámara Robles, Ximena Paparella, Martín Regas, Hernán Borelli y Kelly' ) {

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

      this.continuar.emit( { pageNumber: 5, response: { pregunta: 'Quiénes ingresaron al Team en el transcurso de este año?', respuesta, errores: this.errores } });
    }

  }

}
