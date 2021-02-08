import { Component, Input } from '@angular/core';
import { NesButtonAppearance } from '../types';

@Component({
  selector: 'nes-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() appearance: NesButtonAppearance =  'normal';
  @Input() disabled = false;
  @Input() type: 'button' | 'submit' | 'reset' | 'file' = 'button';

  constructor() { }


}
