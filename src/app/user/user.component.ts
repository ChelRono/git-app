import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GitService } from '../git.service';
// import { ReposComponent} from '../repos/repos.component';
import { RepoArray } from '../user';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  title = 'Github Search';
  values = '';
  isLoading:boolean = false;
  noInput:boolean = true;
  getFetchSuccess:boolean = false;
  NoUser:boolean = false;
  repoArrays: RepoArray[] | undefined;
  username:string 
  constructor(private _gitService: GitService) { }

  ngOnInit() {
    this.fetchUser()
  }


  onKey(event: any) { // without type info
    this.values = event.target.value;
    this.getFetchSuccess = false;
    this.NoUser = false;
    if (this.values == '') {
  			this.noInput = true;
  	} else {
  			this.noInput = false;
  	} 
  }

  search(userName: string): void {
  	this.getFetchSuccess = false;
  	this.NoUser = false;
    userName = this.values.trim();
    if (!userName) { return; }
    // this._gitService.getRepos(userName) 
    this.isLoading = true;
    // this.fetchUser(userName);
  }

  fetchUser():void {
    this._gitService.getRepos().subscribe( (data:any) => {
      console.log(data);
      
		this.repoArrays = data;
		 if (this.repoArrays == undefined || this.repoArrays && this.repoArrays.length == 0) {
			 this.NoUser = true;
		 } else {
	     this.NoUser = false;
	   };
	});

    setTimeout(function(){
       this.isLoading = false;
       this.getFetchSuccess = true;
    }.bind(this),1000);
  }

onSearch(form: NgForm){
    this.username = form.value.userdes
}

}