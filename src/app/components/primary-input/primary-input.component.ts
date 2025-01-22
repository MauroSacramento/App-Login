import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

type InputType = "text"|"email"|"password";

@Component({
  selector: 'app-primary-input',
  imports: [ReactiveFormsModule],
  templateUrl: './primary-input.component.html',
  styleUrl: './primary-input.component.scss'
})
export class PrimaryInputComponent {
@Input() label!: string;
@Input() type: InputType = "text";
@Input() formName!: string;
@Input() placeholder!: string;
}
