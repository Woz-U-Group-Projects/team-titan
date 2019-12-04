import { Injectable } from '@angular/core';
import {issue} from '../../../../backend/models/issues.js';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { map, catchError, tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const endpoint = 'http://localhost:4000/test/issues';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  
  constructor(private http: HttpClient) { }
  

  //private extractData(res: Response) {
    //let body = res;
    //return body || { };
  //}
  // get issues
  getIssues(): Observable<issue[]> {
    return this.http.get<issue[]>(endpoint).pipe(
      tap(issue => console.log('fetched issus')),
      catchError(this.handleError('getissues',[]))
      );
  }

  //get issues by ID
  getIssue(id: any): Observable<issue> {
    const url = `${endpoint}/${id}`;
    return this.http.get<issue>(url, httpOptions).pipe(
      tap(_ => console.log(`fetched issue id=${id}`)),
      catchError(this.handleError<issue>(`getIssue id=${id}`))
      );
  }

  // post issue
  addIssues(data: issue): Observable<issue> {
    return this.http.post<issue>(endpoint + '/add', data, httpOptions).pipe(
      tap((iss: any) => console.log(`added issue w/ id=${iss._id}`)),
      catchError(this.handleError<issue>('addIsssue'))
    );
  }

  // update issue
  updateIssue(id: any, data: issue): Observable<issue> {
    const url = `${endpoint}/update/${id}`;
    return this.http.put(url, data, httpOptions).pipe(
      tap(_ => console.log(`updated issue w/ id=${id}`)),
      catchError(this.handleError<any>('deleteIssue'))
    );
  }

  //delete issue
  deleteIssue (id: any): Observable<issue> {
    const url = `${endpoint}/delete/${id}`;
    return this.http.delete<issue>(url, httpOptions).pipe(
    tap(_ => console.log(`deleted issue id=${id}`)),
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
