import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserVotesComponent } from './user-votes.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UserVotesComponent
  ],
  exports: [
    UserVotesComponent
  ]
})
export class UserVotesModule { }
