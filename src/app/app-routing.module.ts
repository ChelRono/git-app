import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { UserComponent } from './user/user.component';
import { OrgComponent } from './org/org.component';


const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: '/' },
  { path: 'user', component: UserComponent },
  { path: 'org',  component: OrgComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }