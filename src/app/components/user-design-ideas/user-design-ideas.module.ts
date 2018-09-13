import { NgModule } from '@angular/core';
import { UserDesignIdeasComponent } from './user-design-ideas.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { UserDesignService } from '../../services/user-design-ideas.service';
import { UserVotesModule } from '../user-votes/user-votes.module';


@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'feedback', component: UserDesignIdeasComponent }
    ]),
    CommonModule,
    HttpModule,
    UserVotesModule
  ],
  declarations: [
    UserDesignIdeasComponent
  ],
  providers: [
    UserDesignService
  ]
})
export class UserDesignIdeasModule { }
