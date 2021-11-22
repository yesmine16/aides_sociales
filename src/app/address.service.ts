import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Address } from './address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private baseURL = "http://localhost:8080/api/address";

  constructor(private httpClient: HttpClient) { }
  

  create(add:Address): Observable<Object>{
    
    return this.httpClient.post(`${this.baseURL}`,add);
  }

  getList(): Observable<Address[]>{
   
    
    return this.httpClient.get<Address[]>(`${this.baseURL}`,{});
  }

}

  
