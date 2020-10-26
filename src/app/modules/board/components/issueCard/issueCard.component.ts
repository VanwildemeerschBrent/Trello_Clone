import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-issueCard',
  templateUrl: './issueCard.component.html',
  styleUrls: ['./issueCard.component.scss']
})
export class IssueCardComponent implements OnInit {

  @Input() issue;

  

  constructor() { }

  ngOnInit() {
  }

}
