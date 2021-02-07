import { Directive, Input, ElementRef } from '@angular/core';
import { NesText } from '../types';

@Directive({
  selector: '[nesText]'
})
export class NesTextDirective {

  private className: string;

  @Input('nesText') set _textStyle(style: NesText) {
    switch (style) {
      case 'primary':
        this.addClass('is-primary');
        break;
      case 'success':
        this.addClass('is-success');
        break;
      case 'error':
        this.addClass('is-error');
        break;
      case 'warning':
        this.addClass('is-warning');
        break;
      case 'disabled':
        this.addClass('is-disabled');
        break;
    }
  }

  private addClass(className: string): void {
    if (this.className) {
      this.elementRef.nativeElement.classList.remove(this.className);
    }
    this.elementRef.nativeElement.classList.add(className);
    this.className = className;
  }

  constructor(public elementRef: ElementRef) {
    this.elementRef.nativeElement.classList.add('nes-text');
  }

}
