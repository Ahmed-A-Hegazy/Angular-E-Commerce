import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  registerForm: FormGroup;
  submitted = false;
  confirmPassword=true

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      name:['', [Validators.required, Validators.minLength(3)]],
      email: ['', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[`@`%$#]).{8,}$/)
      ]],
      confirmPassword:['']
    })
  }


  handleFromSubmit(form:any){
    this.submitted=true
    this.confirmPassword=form.value['password']==form.value['confirmPassword']


  }
}
