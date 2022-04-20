import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { GitService } from './git.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ReposComponent } from './repos/repos.component';
import { TruncatePipe } from './truncate.pipe';
import { OrgComponent } from './org/org.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ReposComponent,
    TruncatePipe,
    OrgComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [GitService],
  bootstrap: [AppComponent]
})
export class AppModule { }