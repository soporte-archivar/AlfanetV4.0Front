import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecibidosComponent } from './pages/recibidos/recibidos.component';
import { EnviadosComponent } from './pages/enviados/enviados.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RecibidosComponent,
    EnviadosComponent
  ],
  exports:[
    RecibidosComponent,
    EnviadosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class DocumentosModule { }
