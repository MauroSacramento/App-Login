import { Component } from '@angular/core';
import { DefaultLoginComponent } from "../../components/default-login/default-login.component";
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PrimaryInputComponent } from "../../components/primary-input/primary-input.component";

@Component({
  selector: 'app-signup',
  imports: [DefaultLoginComponent, ReactiveFormsModule, PrimaryInputComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  signupForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPass: new FormControl('')
  })
}
