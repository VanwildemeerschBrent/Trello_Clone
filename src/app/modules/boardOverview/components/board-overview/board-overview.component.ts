import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { faClock, faUser } from '@fortawesome/free-solid-svg-icons';
import { BoardService } from 'src/app/shared/services/board.service';
import { Board } from '../../models/board';
@Component({
  selector: 'app-board-overview',
  templateUrl: './board-overview.component.html',
  styleUrls: ['./board-overview.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(1000)
      ])
    ]),
    trigger('fadePopup', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(200)
      ])
    ])
  ]
})
export class BoardOverviewComponent implements OnInit {
  faClock = faClock;
  faUser = faUser;

  trelloBoards: Board[] = [];
  lastChangedBoards: Board[];
  isNewBoardPopupVisible: boolean = false;
  constructor(private boardService: BoardService) { }

  ngOnInit() {
    this.boardService.getAllTrelloBoards().subscribe((allBoards) => {
      this.trelloBoards = allBoards.sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0);
      this.sortAndFilterByLastUpdated();
    });
  }

  sortAndFilterByLastUpdated(): void {
    let sortedBoards = Array.from(this.trelloBoards);
    sortedBoards = sortedBoards.sort((a, b) => {
      return ((new Date(a.updated_at) < new Date(b.updated_at)) ? -1 : (new Date(a.updated_at) > new Date(b.updated_at)) ? 1 : 0);
    });
    this.lastChangedBoards = sortedBoards.slice(0, 2);
  }


}
