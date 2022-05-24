import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  checkoutForm = this.formBuilder.group({
    first: '',
    last: '',
    email:''
  });

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  onSubmit(): void {
    console.warn('Hi',this.checkoutForm.value);
    this.checkoutForm.reset();
  }

  onClear(): void {
    this.checkoutForm.reset();
  }
}
