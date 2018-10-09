import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { ClimbingRoute } from './entities/climbingRoute'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class RouteService {

  addRouteUrl = '/api/addRoute'
  getRoutesUrl = '/api/getRoutes'
  
   
  // Adds a new route to the server
  addRoute(newRoute: ClimbingRoute): Observable<any> {
    return this.http.post<any>(this.addRouteUrl, newRoute, httpOptions)
    .pipe(
      catchError(this.handleError<any>('addRoute'))
    );
  }
  
  constructor(private http: HttpClient) { }

  getRoutes(id: number): Observable <any> {
    return this.http.get<any>(this.getRoutesUrl+ "/" + id).pipe(
      catchError(this.handleError('getRoutes', 'any'))
    );

  }


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
