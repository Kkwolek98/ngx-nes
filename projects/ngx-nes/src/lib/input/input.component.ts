import { Component, Input, Optional } from '@angular/core';
import { NesOutlineAppearance } from '../types';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'nes-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements ControlValueAccessor {

  @Input() label: string;
  @Input() type: 'number' | 'text' | 'password' = 'text';
  @Input() class: string;
  @Input() appearance: NesOutlineAppearance = 'default';
  @Input() inline = true;
  @Input() disabled = false;

  constructor(
    @Optional() public ngControl: NgControl
  ) {
    if (ngControl) {
      ngControl.valueAccessor = this;
    }
  }

  // tslint:disable-next-line: variable-name
  private _value: any;

  get value(): any { return this._value; }
  set value(value: any) {
    this.writeValue(value);
    this.onChange(value);
    this.onTouch(value);
  }

  public writeValue(value: any): any {
    if (value !== this._value) {
      this._value = value;
    }
  }

  public registerOnChange(fn: any): any {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): any {
    this.onTouch = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public onChange: any = () => {};
  public onTouch: any = () => {};



}
