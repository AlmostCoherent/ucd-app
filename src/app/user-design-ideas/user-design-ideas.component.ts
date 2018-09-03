import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-design-ideas',
  templateUrl: './user-design-ideas.component.html',
  styleUrls: ['./user-design-ideas.component.css']
})
export class UserDesignIdeasComponent implements OnInit {

  pageTitle: string = 'User Centered Design';
  loopingList: string[];

  constructor() { 
  }

  ngOnInit() : void {
    console.log('Test Fuck!');
    this.loopingList = ["One", "Two", "Three"];
    console.log(this.loopingList);
  }

}
