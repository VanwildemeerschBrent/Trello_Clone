import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Board } from '../models/board';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  // private API_URL = 'https://trello-clone-api-bv.herokuapp.com/';
  private API_URL = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getAllTrelloBoards(): Observable<Board[]> {
    return this.http.get<Board[]>(this.API_URL + 'boards/all');
  }

  getTrelloBoard(boardId: string): Observable<Board> {
    return this.http.get<Board>(this.API_URL + 'boards/' + boardId)
  }

  createTrelloBoard(board: Board): Observable<Board> {
    return this.http.post<Board>(this.API_URL + 'boards', board);
  }

  createNewBoardColumn(board: Board, columnName: string): Observable<Board> {
    return this.http.post<Board>(`${this.API_URL}boards/column`, { id: board['_id'], name: columnName });
  }

  updateBoardColumn(): void {

  }

  deleteBoardColumn(): void { }
}
