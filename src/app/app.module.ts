import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'; 
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { UserDesignIdeasModule } from './components/user-design-ideas/user-design-ideas.module';
import { UserDesignIdeasComponent } from './components/user-design-ideas/user-design-ideas.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'design-ideas', component: UserDesignIdeasComponent },
      { path: '', component: UserDesignIdeasComponent }
    ]),
    UserDesignIdeasModule
  ],
  providers: [],
  bootstrap: [ 
    AppComponent 
  ]
})
export class AppModule { }
