import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooleanToSimNaoPipe } from './pipe/boolean-to-sim-nao.pipe';
// import { BooleanToSimNaoPipe } from './boolean-to-sim-nao.pipe';
// Certifique-se de usar o caminho correto

@NgModule({
  declarations: [BooleanToSimNaoPipe],
  imports: [CommonModule],
  exports: [BooleanToSimNaoPipe]
})
export class SharedModule { }
