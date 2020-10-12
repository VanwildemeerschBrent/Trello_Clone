import { Component, OnInit } from '@angular/core';
import { faClock, faUser } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-board-overview',
  templateUrl: './board-overview.component.html',
  styleUrls: ['./board-overview.component.scss']
})
export class BoardOverviewComponent implements OnInit {

  faClock = faClock;
  faUser = faUser;
  constructor() { }

  ngOnInit() {
  }

}
