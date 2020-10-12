import { Component, OnInit } from '@angular/core';
import { faList, faStickyNote } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faList = faList;
  faStickyNote = faStickyNote;
  constructor() { }

  ngOnInit() {
  }

}
