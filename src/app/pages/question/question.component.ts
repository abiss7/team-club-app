import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RespuestaService } from '../../services/respuesta.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  pageNumber = 0;
  formGroup: FormGroup;
  respuestas = [];
  pdf = "assets/files/unas palabras de fin de año.pdf";

  constructor(
    private formBuilder: FormBuilder,
    private respuestaService: RespuestaService
  ) { }

  ngOnInit(): void {

    this.formGroup = this.formBuilder.group({
      name: [ '', [ Validators.required, Validators.maxLength(20) ] ]
    });
  }

  guardarForm(event) {

    event.preventDefault();
    if ( this.formGroup?.controls.name.valid ) {

      this.respuestas.push(this.formGroup?.value.name);
      this.pageNumber = 1;
    }
  }

  async updatePage(nextPage: any) {

    this.pageNumber = nextPage.pageNumber;
    this.respuestas.push(nextPage.response);

    if ( this.pageNumber === 24 ) {

      const data = {

        name: this.respuestas[0],
        preguntas: this.respuestas.slice(1).map(i => i.pregunta),
        respuestas: this.respuestas.slice(1).map(i => i.respuesta),
        errores: this.respuestas.slice(1).map(i => i.errores)
      };

      const resp = await this.respuestaService.save(data);
      console.log(resp);
    }
  }

}
