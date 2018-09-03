import { NgModule } from '@angular/core';
import { UserDesignIdeasComponent } from './user-design-ideas.component';
import { RouterModule } from '../../../node_modules/@angular/router';
import { CommonModule } from '@angular/common';
import { HttpModule } from '../../../node_modules/@angular/http';


@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'feedback', component: UserDesignIdeasComponent }
    ]),
    CommonModule,
    HttpModule
  ],
  declarations: [
    UserDesignIdeasComponent
  ],
  providers: [
  ]
})
export class UserDesignIdeasModule { }
