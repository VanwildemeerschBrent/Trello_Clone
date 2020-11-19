import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { Board } from 'src/app/core/models/board';

@Component({
  selector: 'app-createBoardPopup',
  templateUrl: './createBoardPopup.component.html',
  styleUrls: ['./createBoardPopup.component.scss']
})
export class CreateBoardPopupComponent implements OnInit {

  faTimes = faTimes;

  @Output() closePopup = new EventEmitter<boolean>();
  @Output() createNewBoard = new EventEmitter<Board>();

  creationForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.creationForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      tags: new FormControl('')
    });
  }

  onClickClosePopup(): void {
    this.closePopup.emit(true);

  }
  onClickCreateBoard(): void {
    if (this.creationForm.valid) {
      const newBoard: Board = new Board();
      newBoard.name = this.creationForm.get('name').value;
      newBoard.tags = this.creationForm.get('tags').value.split(';').map(x => x.trim());
      newBoard.created_by = 'User';
      newBoard.created_at = new Date().toISOString();
      newBoard.updated_at = new Date().toISOString();
      this.createNewBoard.emit(newBoard);
    }

  }
}
