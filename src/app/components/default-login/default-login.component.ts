import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-default-login',
  imports: [],
  templateUrl: './default-login.component.html',
  styleUrl: './default-login.component.scss'
})
export class DefaultLoginComponent {
  @Input() title!: string;
  @Input() primaryBtnText: string = "";
  @Input() secondaryBtnText: string = "";

  @Output() submit = new EventEmitter();
  @Output() navigate = new EventEmitter();
  @Input({required:true}) disabledBtnPrimary!: boolean;


  onSubmit(){
    this.submit.emit()
  }

  onNavigate(){
    this.navigate.emit()
  }
}
