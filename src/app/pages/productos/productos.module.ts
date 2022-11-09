import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarProductosComponent } from './listar-productos/listar-productos.component';
import { AgregarProductosComponent } from './agregar-productos/agregar-productos.component';
import { MaterialModule } from '../../material.module';



@NgModule({
  declarations: [
    ListarProductosComponent,
    AgregarProductosComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ProductosModule { }
