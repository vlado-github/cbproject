import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class GymService {

  getGymsListUrl = '/api/getGymsList'
  getGymsUrl = '/api/getGyms'
  getGymUrl = '/api/getGym'

  getGymsList(): Observable<any> {
    return this.http.get<any>(this.getGymsListUrl).pipe(
      catchError(this.handleError('getGymsList', 'any'))
    );
  }

  //gets a list of gyms with photos from server 
  //todo: use paging or offset, never select all
  getGyms(): Observable<any> {
    return this.http.get<any>(this.getGymsUrl).pipe(
      catchError(this.handleError('getGyms', 'any'))
    );
  }

  //gets a specific gym by ID from server 
  getGym(id: number): Observable<any> {
    return this.http.get<any>(this.getGymUrl + "/" + id).pipe(
      catchError(this.handleError('getGym', 'any'))
    );
  }
  
  constructor(private http: HttpClient) { }

  // Handle Http operation that failed.
  // Let the app continue.
  // @param operation - name of the operation that failed
  // @param result - optional value to return as the observable result
   
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // console log error 
      console.log(`${operation} failed: ${error.message}`); 

      // TODO: send the error to remote logging infrastructure

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
