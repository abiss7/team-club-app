import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  pageNumber = 0;
  formGroup: FormGroup;
  respuestas = [];
  pdf = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";

  constructor(
    private formBuilder: FormBuilder
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

  updatePage(nextPage: any) {

    this.pageNumber = nextPage.pageNumber;
    this.respuestas.push(nextPage.response);
    console.log(this.respuestas);
  }

}
