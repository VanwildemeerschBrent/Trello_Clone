import { Component, Input, OnInit } from '@angular/core';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-issueCard',
  templateUrl: './issueCard.component.html',
  styleUrls: ['./issueCard.component.scss']
})
export class IssueCardComponent implements OnInit {

  @Input() issue;

  editIcon = faEllipsisH;

  constructor() { }

  ngOnInit() {
  }

}
