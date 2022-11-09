import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ProductosService } from '../../../services/productos.service';
import { IProducto } from '../../../interfaces/producto.interface';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {

  displayedColumns: string[] = ['nro', 'nombre_producto', 'precio_producto', 'cantidad_producto', 'categoria', 'actions'];
  dataSource!: MatTableDataSource<IProducto>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private productoService: ProductosService) { }

  ngOnInit(): void {
    
    this.getProductos();
    
  }

  getProductos(){
    this.productoService.getAllProductos().subscribe({
      next: (resp: IProducto[]) => {
        this.dataSource = new MatTableDataSource<IProducto>(resp);
        this.dataSource.paginator = this.paginator;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  editProducto(){
    console.log('EDIT PRODUCTO...');
  }

  deleteProducto(){
    console.log('DELETE PRODUCTO...')
  }

}
