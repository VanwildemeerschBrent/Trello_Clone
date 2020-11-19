import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { BoardService } from '../../services/board.service';

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

  ngOnInit(): void {
  }

  onClickEditIssue(): void {
    this.editIssueEvent.emit(this.issue);
  }

}
