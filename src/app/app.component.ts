import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  formdata;
  first;
  last;

  constructor(
  ) {}

  ngOnInit() {
    this.formdata = new FormGroup({
        first: new FormControl(""),
        last: new FormControl(""),
        email: new FormControl("")
      });
  }

  onClickSubmit(data): void {
    this.first = data.first;
    this.last = data.last;
  }

  onClear(): void {
    this.formdata.reset();
  }
}
