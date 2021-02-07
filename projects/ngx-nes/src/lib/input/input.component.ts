import { Component, OnInit, Input } from '@angular/core';
import { NesOutlineAppearance } from '../types';

@Component({
  selector: 'nes-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() label: string;
  @Input() type: 'number' | 'text' | 'password' = 'text';
  @Input() class: string;
  @Input() appearance: NesOutlineAppearance = 'default';
  @Input() inline = true;

  constructor() { }

  ngOnInit(): void {
  }

}
