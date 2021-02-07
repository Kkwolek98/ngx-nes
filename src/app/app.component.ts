import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-nes-lib';

  public form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      input: ''
    });

    this.form.valueChanges.subscribe(val => console.log(val));
  }
}
