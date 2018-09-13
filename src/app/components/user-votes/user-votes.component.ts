import { Component, OnChanges, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'user-votes',
  templateUrl: './user-votes.component.html',
  styleUrls: ['./user-votes.component.css']
})
export class UserVotesComponent implements OnChanges {

  @Input() index: number;
  @Input() votes: number;

  @Output() voteClicked: EventEmitter<number> = new EventEmitter<number>();

  ngOnChanges(): void {
  }

  onClick() {
    this.voteClicked.emit((this.index));    
  }

}
