import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { BoardService } from 'src/app/shared/services/board.service';

@Component({
  selector: 'app-issueCard',
  templateUrl: './issueCard.component.html',
  styleUrls: ['./issueCard.component.scss']
})
export class IssueCardComponent implements OnInit {

  @Input() issue;
  @Output() editIssueEvent = new EventEmitter<string>();

  editIcon = faPencilAlt;

  constructor(private boardService: BoardService) { }

  ngOnInit() {
  }

  onClickEditIssue() {
    this.editIssueEvent.emit(this.issue);
  }

}
