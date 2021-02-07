import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgxNesComponent } from './ngx-nes.component';
import { InputComponent } from './input/input.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [NgxNesComponent, InputComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [NgxNesComponent, InputComponent]
})
export class NgxNesModule { }
