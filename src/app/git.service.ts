import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { RepoArray } from './user';


// const httpOptions = {
//     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

@Injectable({
  providedIn: 'root'
})
export class GitService {
  [x: string]: any;

  username= "ChelRono"

  constructor(private http: HttpClient) { }

  configUrl=`https://api.github.com/users/${this.username}/repos`


  getRepos():Observable<RepoArray[]> {
    // const url = `${this.configUrl}/users/${userName}/repos`
    return this.http.get<RepoArray[]>(this.configUrl)
    .pipe(
        catchError(this.handleError('fetch users', []))
      );
  }

 

  private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
 
   
    console.error(error); 
 

    console.log(`${operation}. Reason: ${error.message}`);
 

    return of(result as T);
  };
}
 
upadateUser(userName:string){
    this.username =  userName
}
}