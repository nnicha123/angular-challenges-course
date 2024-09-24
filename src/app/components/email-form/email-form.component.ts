import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrl: './email-form.component.scss'
})
export class EmailFormComponent {
  form: FormGroup = new FormGroup({});

  constructor(private formBuilder:FormBuilder){
    this.initialiseForm();
  }

  private initialiseForm(){
    this.form = this.formBuilder.group({
      name: ['',[Validators.required, Validators.minLength(2)]],
      email:['',[Validators.required, Validators.email]],
      message:['']
    })
  }

  get name(){
    return this.form.controls['name'];
  }

  get email(){
    return this.form.controls['email'];
  }

  submitMessage(){
    console.log('Hello');
  }
}
