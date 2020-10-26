import { Component, Input, OnInit } from '@angular/core';
import { faPlus, faEllipsisH } from "@fortawesome/free-solid-svg-icons"

@Component({
  selector: 'app-boardColumn',
  templateUrl: './boardColumn.component.html',
  styleUrls: ['./boardColumn.component.scss']
})
export class BoardColumnComponent implements OnInit {

  faPlus = faPlus;
  faColumnMenu = faEllipsisH;

  @Input() column: Object;

  constructor() { }

  ngOnInit() {
  }


  onClickAddNewIssueToBoard(column: Object): void {
    console.warn('Add new issue to column', column)

  }

}
