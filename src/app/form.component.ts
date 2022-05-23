import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})

export class FormComponent  {
  @Input() name: string;

  checkoutForm = this.formBuilder.group({
    first: '',
    last: '',
    email:'',
  });

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  onSubmit(): void {
    // Process checkout data here
    console.warn(this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
