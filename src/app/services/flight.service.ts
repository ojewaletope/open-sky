import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {ResponseInterface} from '../model/response-interface';

@Injectable({
  providedIn: 'root'
})


export class FlightService {
  constructor(private http: HttpClient) {}

  getArrivalFlights(airport, start, end): Observable<ResponseInterface[]> {
    return this.http
      .get<ResponseInterface[]>(
        `${environment.BASE_URL}flights/arrival?airport=${airport}&begin=${start}&end=${end}`
      )
      .pipe(
        tap(data => {
          return data;
        })
      );
  }

  getDepartureFlights(airport, start, end): Observable<ResponseInterface[]> {
    return this.http
      .get<ResponseInterface[]>(
        `${environment.BASE_URL}flights/departure?airport=${airport}&begin=${start}&end=${end}`
      )
      .pipe(
        tap(data => {
          return data;
        })
      );
  }
}
