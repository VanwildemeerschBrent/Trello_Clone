import { Component, Input, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
  }

  onClickAddNewIssueToBoard(column: Object): void {
    this.isAddNewIssueFormVisible = true;
    console.warn('Add new issue to column', column);
  }

  addIssueToColumn(issueText: string): void {

  }
}
