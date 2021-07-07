import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Pilar } from './pilar'

@Injectable({
  providedIn: 'root'
})
export class PilarService {
	
	
  private baseURL = "http://localhost:8080/pilar";

  constructor(private httpClient: HttpClient) { }

  //Metodos criados
  getPilaresList(): Observable<Pilar[]>{
	return this.httpClient.get<Pilar[]>(`${this.baseURL}`);
	}
	 
  createPilar(pilar: Pilar): Observable<Object>{
	return this.httpClient.post(`${this.baseURL}`, pilar);
	}
	
  getPilarById(id: number): Observable<Pilar>{
  console.log(id);
	return this.httpClient.get<Pilar> (`${this.baseURL}/${id}`);
	}
  updatePilar(id: number, pilar: Pilar): Observable<Object>{
	return this.httpClient.put(`${this.baseURL}/${id}`, pilar);
    }
  deletePilar(id: number):Observable<Object>{
	return this.httpClient.delete(`${this.baseURL}/${id}`);
	}
}
