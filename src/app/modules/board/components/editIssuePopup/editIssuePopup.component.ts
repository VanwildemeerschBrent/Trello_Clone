import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTimes, faCopy, faTrash } from '@fortawesome/free-solid-svg-icons'
import { BoardService } from 'src/app/shared/services/board.service';
@Component({
  selector: 'app-editIssuePopup',
  templateUrl: './editIssuePopup.component.html',
  styleUrls: ['./editIssuePopup.component.scss']
})
export class EditIssuePopupComponent implements OnInit {

  @Input() issue;
  @Output() closePopupEvent = new EventEmitter();

  closeIcon = faTimes;
  copyIcon = faCopy;
  deleteIcon = faTrash;

  constructor(private boardService: BoardService) { }

  ngOnInit() {
    console.warn('Selected issue', this.issue)
  }

  onClickClosePopup(): void {
    this.closePopupEvent.emit();
  }

  onClickCopyIssue(): void {

  }

  onClickDeleteIssue(): void {
    this.boardService.deleteIssue(this.issue).subscribe((res) => console.log('Issue deleted', res));
  }

}
