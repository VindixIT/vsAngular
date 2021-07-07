import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Ciclo } from './ciclo'

@Injectable({
  providedIn: 'root'
})
export class CicloService {
	
	
  private baseURL = "http://localhost:8080/ciclo";

  constructor(private httpClient: HttpClient) { }

  //Metodos criados
  getCiclosList(): Observable<Ciclo[]>{
	return this.httpClient.get<Ciclo[]>(`${this.baseURL}`);
	}
	 
  createCiclo(ciclo: Ciclo): Observable<Object>{
	return this.httpClient.post(`${this.baseURL}`, ciclo);
	}
	
  getCicloById(id: number): Observable<Ciclo>{
  console.log('getCiclo',id);
	return this.httpClient.get<Ciclo> (`${this.baseURL}/${id}`);
	}
  updateCiclo(id: number, ciclo: Ciclo): Observable<Object>{
    console.log('updateCiclo',id);
	return this.httpClient.put(`${this.baseURL}/${id}`, ciclo);
    }
  deleteCiclo(id: number):Observable<Object>{
  console.log('deleteCiclo',id);
	return this.httpClient.delete(`${this.baseURL}/${id}`);  
	}
}
