import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Bien } from './bien';
import { Image } from './bien';

@Injectable({
  providedIn: 'root'
})
export class BienService {

  constructor(private httpClient: HttpClient) { }
  getBiens() : Observable<Bien[]>{
    return this.httpClient.get<Bien[]>(environment.apiUrl + '/biens');
  }

  getBien(id:number) : Observable<Bien> {
    return this.httpClient.get<Bien>(environment.apiUrl + '/biens/' + id);
  }

  deleteBien(id:number): Observable<Object>{
    return this.httpClient.delete(environment.apiUrl + '/biens/' + id);
  }

  addBien(newBien:Bien): Observable<any> {
    const headers = { 'content-type': 'application/json'};  
    return this.httpClient.post(environment.apiUrl + '/biens',newBien,{'headers': headers});
  }

  updateBien(modifiedBien:Bien, id:number): Observable<any> {
    const headers = { 'content-type': 'application/json'};  
    return this.httpClient.put(environment.apiUrl + '/biens/'+ id ,modifiedBien,{'headers': headers});
  }
}
