// import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { GitService } from '../git.service';
// import { ReposComponent} from '../repos/repos.component';
// import { RepoArray } from '../user';


// @Component({
//   selector: 'app-user',
//   templateUrl: './user.component.html',
//   styleUrls: ['./user.component.css']
// })
// export class UserComponent implements OnInit {

//   title = 'Github Search';
//   values = '';
//   isLoading:boolean = false;
//   noInput:boolean = true;
//   getFetchSuccess:boolean = false;
//   NoUser:boolean = false;
//   repoArrays: RepoArray[] | undefined;
//   username:string 

//   constructor(private _gitService: GitService) { }

//   ngOnInit() {
//     this.fetchUser(this.username)
//   }


//   onKey(event: any) { // without type info
//     this.values = event.target.value;
//     this.getFetchSuccess = false;
//     this.NoUser = false;
//     if (this.values == '') {
//   			this.noInput = true;
//   	} else {
//   			this.noInput = false;
//   	} 
//   }

//   search(userName: string): void {
//   	this.getFetchSuccess = false;
//   	this.NoUser = false;
//     userName = this.values.trim();
//     if (!userName) { return; }
//     this._gitService.getRepos(userName) 
//     this.isLoading = true;
//     this.fetchUser(userName);
//   }

//   fetchUser(userName: string):void {
//     this._gitService.getRepos(userName).subscribe( (userName:any) => {
//       console.log(userName);
      
// 		this.repoArrays = userName;
// 		 if (this.repoArrays == undefined || this.repoArrays && this.repoArrays.length == 0) {
// 			 this.NoUser = true;
// 		 } else {
// 	     this.NoUser = false;
// 	   };
// 	});

//     setTimeout(function(){
//        this.isLoading = false;
//        this.getFetchSuccess = true;
//     }.bind(this),1000);
//   }

// onSearch(form: NgForm){
//     this.username = form.value.username
// }

//  ngOnInit() {
//     this.fetchUser(this.username)
//   }
// }

import { Component, OnInit } from '@angular/core';
import { GitService } from '../git.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
   user:any;
  repos:any[];
  username:string;

  constructor(private gitService:GitService){
  }
findUser(){
  this.gitService.updateUser(this.username);
  this.gitService.getServiceInfo().subscribe((user: any[])=>{
    console.log(user);
    this.user=user;
  });
  this.gitService.getServiceRepos().subscribe((repos: any[])=>{
    console.log(repos)
    this.repos=repos;
  })
}
  ngOnInit() {
    

    }
  }

 


