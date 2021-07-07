import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { TipoNota } from './tipoNota'

@Injectable({
  providedIn: 'root'
})
export class TipoNotaService {
	
	
  private baseURL = "http://localhost:8080/tipoNota";

  constructor(private httpClient: HttpClient) { }

  //Metodos criados
  getTipoNotasList(): Observable<TipoNota[]>{
	return this.httpClient.get<TipoNota[]>(`${this.baseURL}`);
	}
	 
  createTipoNota(tipoNota: TipoNota): Observable<Object>{
	return this.httpClient.post(`${this.baseURL}`, tipoNota);
	}
	
  getTipoNotaById(id: number): Observable<TipoNota>{
  console.log(id);
	return this.httpClient.get<TipoNota> (`${this.baseURL}/${id}`);
	}
  updateTipoNota(id: number, tipoNota: TipoNota): Observable<Object>{
	return this.httpClient.put(`${this.baseURL}/${id}`, tipoNota);
    }
  deleteTipoNota(id: number):Observable<Object>{
	return this.httpClient.delete(`${this.baseURL}/${id}`);
	}
}
