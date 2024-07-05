import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComercializadoraService {
  private _endpoint: string = environment.endPoint;
  private _apiurl: string = this._endpoint + "ProductosCategorias/";
  constructor(private httpClient: HttpClient) { }

  
  getListProducts(): Observable<any[]>{
    return this.httpClient.get<any[]>(`${this._apiurl}ProductosPorCategoria`);
  }

  getListProductsGenral(): Observable<any[]>{
    return this.httpClient.get<any[]>(`${this._apiurl}ListaProductos`);
  }

}
