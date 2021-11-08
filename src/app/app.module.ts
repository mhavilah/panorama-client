import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';

import { GetFirstWordPipe } from './firstWord.pipe';
import { CleanseTitlesPipe } from './cleanseTitles.pipe';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';

import { LoadingDirective } from './loading/loading-directive/loading.directive';
import { LoadingSpinnerComponent } from './loading/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    GetFirstWordPipe,
    CleanseTitlesPipe,
    PostsComponent,
    CommentsComponent,
    LoadingSpinnerComponent, 
    LoadingDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
