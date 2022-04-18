import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { GithubServiceService } from './github-service.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrganisationComponent } from './organisation/organisation.component';
import { RepositoryComponent } from './repository/repository.component';
import { TruncatePipe } from './truncate.pipe';
import { ReposComponent } from './repos/repos.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DashboardComponent,
    OrganisationComponent,
    RepositoryComponent,
    TruncatePipe,
    ReposComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [GithubServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }