import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Elemento } from './elemento'

@Injectable({
  providedIn: 'root'
})
export class ElementoService {
	
	
  private baseURL = "http://localhost:8080/elemento";

  constructor(private httpClient: HttpClient) { }

  //Metodos criados
  getElementosList(): Observable<Elemento[]>{
	return this.httpClient.get<Elemento[]>(`${this.baseURL}`);
	}
	 
  createElemento(elemento: Elemento): Observable<Object>{
	return this.httpClient.post(`${this.baseURL}`, elemento);
	}
	
  getElementoById(id: number): Observable<Elemento>{
  console.log(id);
	return this.httpClient.get<Elemento> (`${this.baseURL}/${id}`);
	}
  updateElemento(id: number, elemento: Elemento): Observable<Object>{
	return this.httpClient.put(`${this.baseURL}/${id}`, elemento);
    }
  deleteElemento(id: number):Observable<Object>{
	return this.httpClient.delete(`${this.baseURL}/${id}`);
	}
}
