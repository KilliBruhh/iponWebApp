import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { combos } from './combos';
import { Observable, observable, retry } from 'rxjs';
import { belts } from './belts';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) {}

  combos : combos[] = [];
  belts : belts[] = [];

    getCombos(): Observable<combos[]> {
      const url = "http://localhost:3000/combos";
      return this.http.get<combos[]>(url);
    }
    
    addCombo(combos: combos): Observable<combos>{
      const url = 'http://localhost:3000/combos';
      return this.http.post<combos>(url,combos);
    }

    editCombo(id: any, data: any){
      const url = 'http://localhost:3000/combos';
      return this.http.put(`${url}/${id}`, data );
    }
  
    deleteCombo(id: number): Observable<any>{
      const url = 'http://localhost:3000/combos/' + id;
      return this.http.delete<combos>(url);
    }

    getCombosById(id: any){
      const url = 'http://localhost:3000/combos/';
      return this.http.get( `${url}/${id}` );
    }

    getCombosByIdDetails(id: any){
      const url = 'http://localhost:3000/combos';
      return this.http.get( `${url}/${id}` );
    }

    
    // Achievement services
    getBelts(): Observable<belts[]> {
      const url = "http://localhost:3000/belts";
      return this.http.get<belts[]>(url);
    }

    // COuld not get this to work.
    editBelt(id: any, checkInfo: boolean): Observable<belts> {
      const url = 'http://localhost:3000/belts/' + id;
      return this.http.patch<belts>(url, checkInfo);
      
    }
    
    getBeltById(id: any) {
      const url = 'http://localhost:3000/belts/';
      return this.http.get(`${url}/${id}`);
    }

}
