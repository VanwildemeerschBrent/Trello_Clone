import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faClock, faUser, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Board } from 'src/app/shared/models/board';
import { BoardService } from 'src/app/boards/services/board.service';


@Component({
  selector: 'app-board-overview',
  templateUrl: './board-overview.component.html',
  styleUrls: ['./board-overview.component.scss'],
})
export class BoardOverviewComponent implements OnInit {
  faClock = faClock;
  faUser = faUser;
  deleteIcon = faTrash

  trelloBoards: Board[] = [];
  lastChangedBoards: Board[];
  isNewBoardPopupVisible: boolean = false;
  constructor(private boardService: BoardService, private router: Router) { }

  ngOnInit(): void {
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

  onCreateNewBoardRequestHandler($event): void {
    this.boardService.createTrelloBoard($event).subscribe((board) => {
      this.trelloBoards.push(board);
      this.isNewBoardPopupVisible = false;
      this.router.navigateByUrl('/board/' + board._id);
    });
  }

  onClickDeleteBoard(board: Board): void {
    this.boardService.deleteTrelloBoard(board).subscribe(() => {
      this.trelloBoards = this.trelloBoards.filter(x => x._id !== board._id);
      this.sortAndFilterByLastUpdated();
    });
  }
}
