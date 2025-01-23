import { Component, inject } from '@angular/core';
import { DefaultLoginComponent } from "../../components/default-login/default-login.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from "../../components/primary-input/primary-input.component";
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';

interface LoginForm {
  email: FormControl,
  password: FormControl
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [DefaultLoginComponent, PrimaryInputComponent, ReactiveFormsModule],
  providers: [LoginService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup<LoginForm>;
  private loginService = inject(LoginService);
  private toastrService = inject(ToastrService);

  constructor(private router: Router){
    
    this.loginForm = new FormGroup({
      email: new FormControl('', {validators: [Validators.required, Validators.email]}),
      password: new FormControl('', {validators: [Validators.required, Validators.minLength(6)]})
    })
  }

  onSubmit(){
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next: () => this.toastrService.success("Login foi feito com sucesso"),
      error: () => this.toastrService.error("Houve um erro no login")
    })
  }

  onNavigate(){
    this.router.navigate(["signup"])
  }

}
