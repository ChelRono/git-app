// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// import { Observable, of } from 'rxjs';
// import { catchError } from 'rxjs/operators';

// import { RepoArray } from './user';


// // const httpOptions = {
// //     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// // };

// @Injectable({
//   providedIn: 'root'
// })
// export class GitService {
  

//   // username= "ChelRono"

//   constructor(private http: HttpClient) { }

//   configUrl=`https://api.github.com/users/${this.userName}`
//   // configUrl= `https://api.github.com/users/repos`


//   getRepos(userName):Observable<RepoArray[]> {
//     const url = `${this.configUrl}/users/${userName}/repos`
//     return this.http.get<RepoArray[]>(url)
//     .pipe(
//         catchError(this.handleError('fetch users', []))
//       );
//   }

 

//   private handleError<T> (operation = 'operation', result?: T) {
//   return (error: any): Observable<T> => {
 
   
//     console.error(error); 
 

//     console.log(`${operation}. Reason: ${error.message}`);
 

//     return of(result as T);
//   };
// }
 
// // upadateUser(userName:string){
// //     this.username =  userName
// // }
// }
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable( {

providedIn: 'root'})

export class GitService {
  
  private username:string;
  private clientid='164e379e1b0180af532d';
  private clientsecret='3da239a69ab38819f936caa11d76d8c9a6d79a79';

  constructor(private http: HttpClient) {
    this.username='ChelRono';
  }
  getServiceInfo(){
    return this.http.get("https://api.github.com/users/"+this.username + "?client_id=" +this.clientid +"&client_secret" +this.clientsecret)
  }
  getServiceRepos(){
    return this.http.get("https://api.github.com/users/"+this.username + "/repos?client_id=" +this.clientid +"&client_secret" +this.clientsecret)
  }

updateUser(username:string){
this.username=username;
}
}