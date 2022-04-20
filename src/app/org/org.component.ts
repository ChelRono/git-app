import { Component, OnInit } from '@angular/core';
import { GitService } from '../git.service';
// import { ReposComponent} from '../repos/repos.component';
import { RepoArray } from '../user';

@Component({
  selector: 'app-org',
  templateUrl: './org.component.html',
  styleUrls: ['./org.component.css']
})
export class OrgComponent implements OnInit {
  
  title = 'Github Search';
  values = '';
  isLoading:boolean = false;
  noInput:boolean = true;
  getFetchSuccess:boolean = false;
  NoOrgs:boolean = false;
  repoArrays: RepoArray[] | undefined;

  constructor(private _gitService: GitService) { }

  ngOnInit() {
  }


  onKey(event: any) { 
    this.values = event.target.value;
    this.getFetchSuccess = false;
    this.NoOrgs = false;
    if (this.values == '') {
  			this.noInput = true;
  	} else {
  			this.noInput = false;
  	} 
  }

  search(userName: string): void {
  	this.getFetchSuccess = false;
    this.NoOrgs = false;
    userName = this.values.trim();
    if (!userName) { return; }
    this._gitService['getOrgRepos'](userName) 
    this.isLoading = true;
    this.fetchOrgs(userName);
  }

  fetchOrgs(UserName: string): void {
    this._gitService['getOrgRepos'](UserName).subscribe( (data: RepoArray[]) => {
		this.repoArrays = data;
    if (this.repoArrays == undefined || this.repoArrays && this.repoArrays.length == 0) {
       this.NoOrgs = true;
     } else {
       this.NoOrgs = false;
     };
	});

    setTimeout(function(){
       this.isLoading = false;
       this.getFetchSuccess = true;
    }.bind(this),1000);
  }



}