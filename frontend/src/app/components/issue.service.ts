import { Injectable } from '@angular/core';
import {issue} from '../../../../backend/models/issues.js';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { map, catchError, tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

const endpoint = '/';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  
  constructor(private http: HttpClient) { }
  

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
  // get issues
  getIssues(): Observable<any> {
    return this.http.get(endpoint, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  //get issues by ID
  getIssuesId(id: string): Observable<any> {
    const url = `${endpoint}/${id}`;
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  // post issue
  addIssues (data): Observable<any> {
    console.log(data);
    return this.http.post(endpoint, data, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  // update issue
  updateIssue (id: string, data): Observable<any> {
    const url = `${endpoint}/${id}`;
    return this.http.put(url, data, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  //delete issue
  deleteIssue (id: string): Observable<{}> {
    const url = `${endpoint}/${id}`;
    return this.http.delete(url, httpOptions).pipe(
      catchError(this.handleError)
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
