import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

type InputType = "text"|"email"|"password";

@Component({
  selector: 'app-primary-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './primary-input.component.html',
  styleUrl: './primary-input.component.scss'
})
export class PrimaryInputComponent {
  @Input() label!: string;
  @Input() type: InputType = "text";
  @Input() placeholder!: string;
  @Input() inputName!: string;
  @Input({required:true}) control!: FormControl;
  //@Input({required: true}) disableBtnPrimary!: boolean;

}
