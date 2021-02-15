import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public radioOptions = [
    {
      title: "Option1",
      value: "opt1"
    },
    {
      title: "Option2",
      value: "opt2"
    },
    {
      title: "Option3",
      value: "opt3"
    },
    {
      title: "Option4",
      value: "opt4"
    }
  ];

  public form: FormGroup;
  public style = 'disabled';
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      input: '',
      radio: '',
    });

    this.form.valueChanges.subscribe(val => console.log(val));
  }
}
