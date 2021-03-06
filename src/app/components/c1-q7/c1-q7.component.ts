import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-c1-q7',
  templateUrl: './c1-q7.component.html',
  styleUrls: ['./c1-q7.component.scss']
})
export class C1Q7Component implements OnInit {

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
    if ( respuesta !== 'Refinamiento' ) {

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

      Swal.fire({
        imageUrl: 'assets/images/pablito-refinen.png',
        title: 'Muy bien!!!',
        allowOutsideClick: true,
        showConfirmButton: true,
        icon: 'success',
        confirmButtonText: `Continuar`,
      }).then((result) => {
        
        this.continuar.emit( { pageNumber: 8, response: { pregunta: 'Qué palabra resumiría adecuadamente cada retro o reunión?', respuesta, errores: this.errores } });
      });
    }

  }

}
