import { ICategoria } from './categoria.interface';
export interface IProducto {
    id_producto: number;
    nombre_producto: string;
    precio_producto: number;
    cantidad_producto: number;
    categoria: ICategoria;
}