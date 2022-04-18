import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MygithubComponent } from './mygithub/mygithub.component';
import { GitFormComponent } from './git-form/git-form.component';
import { UserComponent } from './user/user.component';
import { RepositoryComponent } from './repository/repository.component';




@NgModule({
  declarations: [
    AppComponent,
    MygithubComponent,
    GitFormComponent,
    UserComponent,
    RepositoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
