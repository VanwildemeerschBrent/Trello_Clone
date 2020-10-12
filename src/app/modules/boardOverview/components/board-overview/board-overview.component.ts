import { Component, OnInit } from '@angular/core';
import { faClock, faUser } from '@fortawesome/free-solid-svg-icons';
import { BoardService } from 'src/app/shared/services/board.service';
import { Board } from '../../models/board';
@Component({
  selector: 'app-board-overview',
  templateUrl: './board-overview.component.html',
  styleUrls: ['./board-overview.component.scss']
})
export class BoardOverviewComponent implements OnInit {

  faClock = faClock;
  faUser = faUser;

  trelloBoards: Board[] = [];
  constructor(private boardService: BoardService) { }

  ngOnInit() {
    this.boardService.getAllTrelloBoards().subscribe((allBoards) => {
      this.trelloBoards = allBoards
    });
  }


}
