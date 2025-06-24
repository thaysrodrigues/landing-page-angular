import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

type BtnVariant = "primary" | "secondary";

@Component({
  selector: 'btn-primary',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './btn-primary.html',
  styleUrl: './btn-primary.scss'
})
export class BtnPrimary {
  @Input("btn-text") btnText: string = "";
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() variant: BtnVariant = "primary";
  @Output("submit") onSubmit = new EventEmitter();

  
    submit() {
      this.onSubmit.emit();
  }

}
