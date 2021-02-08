import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgxNesComponent } from './ngx-nes.component';
import { InputComponent } from './input/input.component';
import { CommonModule } from '@angular/common';
import { NesTextDirective } from './directives/nes-text.directive';
import { TextareaComponent } from './textarea/textarea.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [NgxNesComponent, InputComponent, NesTextDirective, TextareaComponent, ButtonComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [NgxNesComponent, InputComponent, NesTextDirective, TextareaComponent, ButtonComponent]
})
export class NgxNesModule { }
