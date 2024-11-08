import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubProjectsComponent } from './github-projects/github-projects.component';
import { HeaderInfoComponent } from './header-info/header-info.component';
import {HttpClient, HttpClientModule, provideHttpClient} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GithubProjectsComponent,
    HeaderInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
