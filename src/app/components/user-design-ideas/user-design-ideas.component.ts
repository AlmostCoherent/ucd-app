import { Component } from '@angular/core';
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { IUserDesignIdea } from './user-design-idea.model';
import { UserDesignService } from '../../services/user-design-ideas.service';


@Component({
  selector: 'app-user-design-ideas',
  templateUrl: './user-design-ideas.component.html',
  styleUrls: ['./user-design-ideas.component.css']
})
export class UserDesignIdeasComponent implements OnInit {

  userFeedback: IUserDesignIdea[];
  pageTitle: string = 'User Centered Design';
  loopingList: string[];
  errorMessasge: string;
  randomUserIdea: IUserDesignIdea;

  constructor(private _userDesignService: UserDesignService) { 
  }

  ngOnInit() : void {
    this._userDesignService.getUserIdeas().subscribe(
      ideas => this.userFeedback = ideas,
      error => this.errorMessasge = <any>error);
      
    console.log(this.userFeedback);
  }

  onVoteClicked(message: number): void {
    let itemIndex = this.userFeedback.findIndex(i => i.feedbackId == message);
    this.userFeedback[itemIndex].feedbackVotes = this.userFeedback[itemIndex].feedbackVotes + 1;
  }

}
