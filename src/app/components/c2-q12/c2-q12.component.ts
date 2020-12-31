import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-c2-q12',
  templateUrl: './c2-q12.component.html',
  styleUrls: ['./c2-q12.component.scss']
})
export class C2Q12Component implements OnInit {

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
    if ( respuesta !== 'Los chistes del Capitán América' ) {

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
        imageUrl: 'assets/images/chiste.png',
        allowOutsideClick: true,
        showConfirmButton: true,
        icon: 'success',
        confirmButtonText: `Continuar`,
      }).then((result) => {
        
        this.continuar.emit( { pageNumber: 23, response: { respuesta, errores: this.errores } });
      });
    }

  }

}
