import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { GithubServiceService } from '../github-service.service';
import { UserComponent} from '../user/user.component';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
  export class RepositoryComponent implements OnInit {

  	@Input() passData;
	          arrayData;

 constructor() {
 }

  ngOnInit() {
  }

 ngOnChanges(changes: SimpleChanges) {
    if (changes['passData']) {
		this.arrayData = this.passData;
	}
  }
}