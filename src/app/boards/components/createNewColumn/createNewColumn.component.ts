import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Board } from 'src/app/core/models/board';
import { BoardService } from 'src/app/boards/services/board.service';
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons"

@Component({
  selector: 'app-createNewColumn',
  templateUrl: './createNewColumn.component.html',
  styleUrls: ['./createNewColumn.component.scss']
})
export class CreateNewColumnComponent implements OnInit {

  faPlus = faPlus;
  faClose = faTimes;
  isBtnAddColumnVisible: boolean = true;

  @Input() board: Board;
  @Output() createNewColumnEvent = new EventEmitter<string>();

  constructor(private boardService: BoardService) { }

  ngOnInit() {
  }


  addColumnToBoard(columnName: string): void {
    this.createNewColumnEvent.emit(columnName);
  }
}
