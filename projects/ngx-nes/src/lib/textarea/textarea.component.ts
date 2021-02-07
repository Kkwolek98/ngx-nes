import { Component, Input, Optional } from '@angular/core';
import { NgControl, ControlValueAccessor } from '@angular/forms';
import { NesOutlineAppearance } from '../types';

@Component({
  selector: 'nes-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements ControlValueAccessor {
  @Input() label: string;
  @Input() type: 'number' | 'text' | 'password' = 'text';
  @Input() appearance: NesOutlineAppearance = 'default';
  @Input() class: string;
  @Input() disabled = false;
  @Input() resizable = true;
  @Input() size: 'small' | 'medium' | 'big';

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
