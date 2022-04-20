import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
  export class ReposComponent implements OnInit {

  	@Input() passData: any
	          arrayData: any;

 constructor() {
 }

  ngOnInit() {
  }

//  ngOnChanges(changes: SimpleChanges) {
//     if (changes['passData']) {
// 		this.arrayData = this.passData;
// 	}
//   }
}