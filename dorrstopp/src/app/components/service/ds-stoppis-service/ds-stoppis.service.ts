import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Stoppis } from '../../interface/stoppis';
import { STOPPISAR } from '../../mock-stoppis';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DsStoppisService {

  API_SERVER = "http://localhost:3000"
  constructor(private httpClient: HttpClient) { }

  getAllaStoppisar(){
    return this.httpClient.get<Stoppis[]>(`${this.API_SERVER}/stoppisar`);
  }

  getStoppisar(): Observable<Stoppis[]> {
    // hämta alla stoppisar http senare
    const stoppisar = of(STOPPISAR);
    return stoppisar;
  }
  getKil(id: number): Observable<Stoppis> {
    // utgår från att stoppis finns felhantering senare
    const kil = STOPPISAR.find(kil => kil.nummer === id)!;
    return of(kil);
  }
}
