import { Component } from '@angular/core';
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { UserDesignIdea } from './user-design-ideal.model';
import { UserDeisgnService } from '../services/user-design-ideas.service';


@Component({
  selector: 'app-user-design-ideas',
  templateUrl: './user-design-ideas.component.html',
  styleUrls: ['./user-design-ideas.component.css']
})
export class UserDesignIdeasComponent implements OnInit {

  userFeedback: UserDesignIdea[];
  pageTitle: string = 'User Centered Design';
  loopingList: string[];
  errorMessasge: string;

  constructor(private _userDesignService: UserDeisgnService) { 
  }

  ngOnInit() : void {
    this.loopingList = ["One", "Two", "Three"];

    this._userDesignService.getUserIdeas().subscribe(
      ideas => this.userFeedback = ideas,
      error => this.errorMessasge = <any>error);

    console.log(this.userFeedback);
  }

}
