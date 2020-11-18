import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Board } from 'src/app/core/models/board';
import { BoardService } from 'src/app/boards/services/board.service';
import { faPlus, faTimes, faEllipsisH } from "@fortawesome/free-solid-svg-icons"
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  faPlus = faPlus;
  faClose = faTimes;
  faColumnMenu = faEllipsisH;
  board: Board;
  boardColumns: number = 0;
  isBtnAddColumnVisible: boolean = true;
  constructor(private boardService: BoardService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const boardId = this.route.snapshot.paramMap.get('id');
    this.boardService.getTrelloBoard(boardId).subscribe((fetchedBoard) => {
      this.board = fetchedBoard;
    });
  }

  onCreateNewColumnForBoard(columnName: string): void {
    this.boardService.createNewBoardColumn(this.board, columnName).subscribe((board) => {
      this.board = board;
      this.isBtnAddColumnVisible = true;
    });
  }

  onCreateNewIssue($input): void {
    const { column, issue } = $input
    this.boardService.createNewIssue(this.board, column, issue).subscribe((board) => {
      this.board = board;
    });
  }
}
