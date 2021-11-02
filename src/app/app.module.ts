import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';

import { FetchJsonPipe } from './fetch-json.pipe';
import { GetFirstWordPipe } from './firstWord.pipe';
import { CleanseTitlesPipe } from './cleanseTitles.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    FetchJsonPipe,
    GetFirstWordPipe,
    CleanseTitlesPipe
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
