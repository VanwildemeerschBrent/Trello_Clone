import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faPlus, faEllipsisH, faTimes } from "@fortawesome/free-solid-svg-icons"

@Component({
  selector: 'app-boardColumn',
  templateUrl: './boardColumn.component.html',
  styleUrls: ['./boardColumn.component.scss']
})
export class BoardColumnComponent implements OnInit {

  faPlus = faPlus;
  faColumnMenu = faEllipsisH;
  faClose = faTimes;

  isAddNewIssueFormVisible = false;

  @Input() column;
  @Output() createNewIssueEvent = new EventEmitter<Object>()


  constructor() { }

  ngOnInit() {
  }

  onClickAddNewIssueToBoard(column: Object): void {
    this.isAddNewIssueFormVisible = true;
  }

  addIssueToColumn(issueText: string): void {
    console.warn('Add issue to column', issueText);
    this.createNewIssueEvent.emit({ column: this.column, issue: issueText });
    this.isAddNewIssueFormVisible = false;
  }
}
