// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';
// import { FormsModule } from '@angular/forms';
// import { GitService } from './git.service';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { UserComponent } from './user/user.component';
// import { ReposComponent } from './repos/repos.component';
// import { TruncatePipe } from './truncate.pipe';
// import { OrgComponent } from './org/org.component';
// import { NavbarComponent } from './navbar/navbar.component';


// @NgModule({
//   declarations: [
//     AppComponent,
//     UserComponent,
//     ReposComponent,
//     TruncatePipe,
//     OrgComponent,
//     NavbarComponent,
//   ],
//   imports: [
//     BrowserModule,
//     HttpClientModule,
//     AppRoutingModule,
//     FormsModule
//   ],
//   providers: [GitService],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { GitService } from './git.service';


  @NgModule({
    declarations: [
      AppComponent,
      UserComponent,
      
    ],
    imports: [
          BrowserModule,
          HttpClientModule,
          FormsModule
        ],
        providers: [GitService],
        bootstrap: [AppComponent]
        })
        export class AppModule { }