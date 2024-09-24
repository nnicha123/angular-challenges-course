import { Component } from '@angular/core';
import { fadeInOutAnimation } from '../animations/fade-in-out.animation';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IFormDirty } from '../guards/form-dirty/form-dirty.interface';

@Component({
  selector: 'app-other-documentation',
  templateUrl: './other-documentation.component.html',
  styleUrl: './other-documentation.component.scss',
  animations: [fadeInOutAnimation]
})
export class OtherDocumentationComponent implements IFormDirty {
  isInDOM = true;
  form: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {
    this.initialiseForm();
  }

  submitForm() {
    this.form.reset(this.form.value);
   }

  private initialiseForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]]
    });
  }
}
