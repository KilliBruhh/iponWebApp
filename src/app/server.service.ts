import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { combos } from './combos';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) {}

  combos : combos[] = [];

    getCombos(): Observable<combos[]> {
      const url = "http://localhost:3000/combos";
      return this.http.get<combos[]>(url);
    }
    
    addCombo(combos: combos): Observable<combos>{
      const url = 'http://localhost:3000/combos';
      return this.http.post<combos>(url,combos);
    }

    updateCombo(id: any, data: any){
      const url = 'http://localhost:3000/combos';
      return this.http.put( `${url}/${id}`, data );
    }
  
    deleteCombo(id: number): Observable<any>{
      const url = 'http://localhost:3000/combos/' + id;
      return this.http.delete<combos>(url);
    }
}
