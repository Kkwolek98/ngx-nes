import { NesUtils } from './../utils';
import { Component, OnInit, Input, Optional } from '@angular/core';
import { NgControl, ControlValueAccessor } from '@angular/forms';
import { NesBackgroundAppearance } from '../types';

@Component({
  selector: 'nes-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements ControlValueAccessor {

  @Input() label: string;
  @Input() options: Array<unknown>;
  @Input() valueAccessKey: string;
  @Input() titleAccessKey: string;
  @Input() disabled = false;
  @Input() inline = true;
  @Input() appearance: NesBackgroundAppearance = 'light';

  public uniqueID;

  constructor(
    @Optional() public ngControl: NgControl
  ) {
    if (ngControl) {
      ngControl.valueAccessor = this;
    }
    this.uniqueID = NesUtils.id();
  }

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
