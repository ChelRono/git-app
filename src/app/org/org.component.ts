import { Component, OnInit } from '@angular/core';
import { GitService } from '../git.service';
import { ReposComponent} from '../repos/repos.component';
import { RepoArray } from '../user';

@Component({
  selector: 'app-orga',
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
  repoArrays: RepoArray[];

  constructor(private _gitService: GitService) { }

  ngOnInit() {
  }


  onKey(event: any) { // without type info
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
    this._gitService.getOrgaRepos(userName) 
    this.isLoading = true;
    this.fetchOrgs(userName);
  }

  fetchOrgs(UserName): void {
    this._gitService.getOrgaRepos(UserName).subscribe( data => {
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