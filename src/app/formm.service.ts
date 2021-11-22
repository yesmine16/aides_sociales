import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Formm } from './formm';


@Injectable({
  providedIn: 'root'
})
export class FormmService {

  private baseURL = "http://localhost:8080/api/form";

  constructor(private httpClient: HttpClient) { }
  

  create(form:Formm): Observable<Object>{
    
    return this.httpClient.post(`${this.baseURL}`, form);
  }

  getList(): Observable<Formm[]>{
        
    return this.httpClient.get<Formm[]>(`${this.baseURL}`,{});
  }

}

  
