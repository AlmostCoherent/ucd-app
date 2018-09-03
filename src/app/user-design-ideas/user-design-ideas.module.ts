import { NgModule } from '@angular/core';
import { UserDesignIdeasComponent } from './user-design-ideas.component';
import { RouterModule } from '../../../node_modules/@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'feedback', component: UserDesignIdeasComponent }
    ])
  ],
  declarations: [
    UserDesignIdeasComponent
  ]
})
export class UserDesignIdeasModule { }
