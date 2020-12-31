import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-c2-q11',
  templateUrl: './c2-q11.component.html',
  styleUrls: ['./c2-q11.component.scss']
})
export class C2Q11Component implements OnInit {

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
    if ( respuesta !== 'Marto' ) {

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
        imageUrl: 'assets/images/marto.png',
        allowOutsideClick: true,
        showConfirmButton: true,
        icon: 'success',
        confirmButtonText: `Continuar`,
      }).then((result) => {
        
        this.continuar.emit( { pageNumber: 22, response: { respuesta, errores: this.errores } });
      });
    }

  }

}
