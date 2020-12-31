import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-c210',
  templateUrl: './c210.component.html',
  styleUrls: ['./c210.component.scss']
})
export class C210Component implements OnInit {

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
    if ( respuesta !== 'Rodo' ) {

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
        imageUrl: 'assets/images/rodo-knife.png',
        allowOutsideClick: true,
        showConfirmButton: true,
        icon: 'success',
        confirmButtonText: `Continuar`,
      }).then((result) => {
        
        this.continuar.emit( { pageNumber: 21, response: { pregunta: 'A quién le gusta sacar los cuchillos cuando hay diferencias de opiniones en las reuniones?r', respuesta, errores: this.errores } });
      });
    }

  }

}
