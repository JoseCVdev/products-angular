import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IProducto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  endpoint: string = environment.url; // http://localhost:8090/api

  constructor(private http: HttpClient) { }

  getAllProductos(){
    return this.http.get<IProducto[]>(`${this.endpoint}/productos/get-all`);
  }

}
