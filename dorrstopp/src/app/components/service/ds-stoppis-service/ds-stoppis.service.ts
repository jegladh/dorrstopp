import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Stoppis } from '../../interface/stoppis';
import { STOPPISAR } from '../../mock-stoppis';

@Injectable({
  providedIn: 'root'
})
export class DsStoppisService {

  constructor() { }

  getStoppisar(): Observable<Stoppis[]> {
    const stoppisar = of(STOPPISAR);
    return stoppisar;
  }
  getKil(id: number): Observable<Stoppis> {
    // utgår från att stoppis finns felhantering senare
    const kil = STOPPISAR.find(h => h.id === id)!;
    return of(kil);
  }
}
