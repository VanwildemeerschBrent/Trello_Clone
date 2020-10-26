import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Board } from 'src/app/shared/models/board';
import { BoardService } from 'src/app/shared/services/board.service';
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons"

@Component({
  selector: 'app-createNewColumn',
  templateUrl: './createNewColumn.component.html',
  styleUrls: ['./createNewColumn.component.scss']
})
export class CreateNewColumnComponent implements OnInit {

  faPlus = faPlus;
  faTimes = faTimes;
  isBtnAddColumnVisible: boolean = true;

  @Input() board: Board;
  @Output() createNewColumnEvent = new EventEmitter<string>();

  constructor(private boardService: BoardService) { }

  ngOnInit() {
  }


  addColumnToBoard(): void {
    this.createNewColumnEvent.emit('Test New column');
   
  }
}
