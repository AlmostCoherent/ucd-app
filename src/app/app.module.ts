import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'; 

import { AppComponent } from './app.component';
import { UserDesignIdeasModule } from './user-design-ideas/user-design-ideas.module';
import { UserDesignIdeasComponent } from './user-design-ideas/user-design-ideas.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '**', component: UserDesignIdeasComponent }
    ]),
    UserDesignIdeasModule
  ],
  providers: [],
  bootstrap: [ 
    AppComponent 
  ]
})
export class AppModule { }
