import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-c2-q5',
  templateUrl: './c2-q5.component.html',
  styleUrls: ['./c2-q5.component.scss']
})
export class C2Q5Component implements OnInit {

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
    if ( respuesta !== 'Web' ) {

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
        imageUrl: 'assets/images/rodo-web.png',
        allowOutsideClick: true,
        showConfirmButton: true,
        icon: 'success',
        confirmButtonText: `Continuar`,
      }).then((result) => {
        
        this.continuar.emit( { pageNumber: 16, response: { pregunta: 'Qué tecnología es candidata que tome Rodo en un futuro (no tan lejano)?', respuesta, errores: this.errores } });
      });
    }

  }

}
