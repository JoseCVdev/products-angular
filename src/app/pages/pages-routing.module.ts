import { NgModule } from '@angular/core';
 import { RouterModule, Routes } from '@angular/router';
import { ListarProductosComponent } from './productos/listar-productos/listar-productos.component';

const routes: Routes = [
    { path: 'listar-productos', component: ListarProductosComponent }
];

 @NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
 })

 export class PagesRoutingModule{}