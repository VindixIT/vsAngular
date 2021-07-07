import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Componente } from './componente'

@Injectable({
  providedIn: 'root'
})
export class ComponenteService {
	
	
  private baseURL = "http://localhost:8080/componente";

  constructor(private httpClient: HttpClient) { }

  //Metodos criados
  getComponentesList(): Observable<Componente[]>{
	return this.httpClient.get<Componente[]>(`${this.baseURL}`);
	}
	 
  createComponente(componente: Componente): Observable<Object>{
	return this.httpClient.post(`${this.baseURL}`, componente);
	}
	
  getComponenteById(id: number): Observable<Componente>{
  console.log(id);
	return this.httpClient.get<Componente> (`${this.baseURL}/${id}`);
	}
  updateComponente(id: number, componente: Componente): Observable<Object>{
	return this.httpClient.put(`${this.baseURL}/${id}`, componente);
    }
  deleteComponente(id: number):Observable<Object>{
	return this.httpClient.delete(`${this.baseURL}/${id}`);
	}
}
