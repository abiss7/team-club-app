import { Component, OnInit } from '@angular/core';
import { RespuestaService } from '../../services/respuesta.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  resultados = [];

  constructor(
    private respuestaService: RespuestaService
  ) { }

  ngOnInit(): void {

    this.respuestaService.list()
      .then(respuestas => {

        this.resultados = respuestas.map((r: any) => {

          return {
            name: r.name,
            error: r.errores.length,
            preguntas: r.preguntas.length,
            respuestas: r.respuestas.length
          };
        });
      });
  }

}
