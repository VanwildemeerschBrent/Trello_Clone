import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Board } from 'src/app/shared/models/board';
import { BoardService } from 'src/app/shared/services/board.service';
import { faPlus } from "@fortawesome/free-solid-svg-icons"
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  faPlus = faPlus;
  board: Board;
  boardColumns: number = 0;
  isBtnAddColumnVisible: boolean = true;
  constructor(private boardService: BoardService, private route: ActivatedRoute) {
    console.log('Constructor Board component')
  }

  ngOnInit(): void {
    const boardId = this.route.snapshot.paramMap.get('id');
    this.boardService.getTrelloBoard(boardId).subscribe((fetchedBoard) => {
      this.board = fetchedBoard;
    });
  }

  onClickAddColumn(): void {
    this.isBtnAddColumnVisible = false;
    this
  }

}
