import { Component } from '@angular/core';
import { DefaultLoginComponent } from "../../components/default-login/default-login.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from "../../components/primary-input/primary-input.component";

@Component({
  selector: 'app-signup',
  imports: [DefaultLoginComponent, ReactiveFormsModule, PrimaryInputComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  signupForm = new FormGroup({
    name: new FormControl('', {validators: [Validators.required]}),
    email: new FormControl('', {validators: [Validators.email]}),
    password: new FormControl('', {validators: [Validators.required, Validators.minLength(6)]}),
    confirmPass: new FormControl('', {validators: [Validators.required, Validators.minLength(6)]})
  })

  onSignUp(){
    console.log(this.signupForm.value)
  }
}
