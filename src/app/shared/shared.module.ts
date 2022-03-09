import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiplyPipe } from './multiply.pipe';



@NgModule({
  declarations: [MultiplyPipe],
  imports: [
    CommonModule
  ],
  exports: [MultiplyPipe]

})
export class SharedModule { }
