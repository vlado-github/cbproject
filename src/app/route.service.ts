import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class RouteService {
  addRouteUrl = '/api'

  addRoute(): Observable<any> {
    return this.http.get<any>(this.addRouteUrl).pipe(
      catchError(this.handleError('addRoute', 'any'))
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
