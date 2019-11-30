import { Injectable } from '@angular/core';
import {issue} from '../../../../backend/models/issues.js';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { map, catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  private endpoint = 'http://localhost:4000/test/issues';
  constructor(private http: HttpClient) { }
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }
  // get issues
  getIssues(): Observable<any> {
    return this.http.get(this.endpoint + 'issues').pipe(
      map(this.extractData));
  }

  //get issues by ID
  getIssuesId(id): Observable<any> {
    return this.http.get(this.endpoint + 'issues/' + id).pipe(
      map(this.extractData));
  }

  // post issue
  addIssues (product): Observable<any> {
    console.log(product);
    return this.http.post<any>(this.endpoint + 'issues', JSON.stringify(product), this.httpOptions).pipe(
      tap((product) => console.log(`added issues w/ id=${product.id}`)),
      catchError(this.handleError<any>('addIssue'))
    );
  }

  // update issue
  updateIssue (id, product): Observable<any> {
    return this.http.put(this.endpoint + 'issues/' + id, JSON.stringify(product), this.httpOptions).pipe(
      tap(_ => console.log(`updated product id=${id}`)),
      catchError(this.handleError<any>('updateIssue'))
    );
  }

  //delete issue
  deleteIssue (id): Observable<any> {
    return this.http.delete<any>(this.endpoint + 'issues/' + id, this.httpOptions).pipe(
      tap(_ => console.log(`deleted product id=${id}`)),
      catchError(this.handleError<any>('deleteIssue'))
    );
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
