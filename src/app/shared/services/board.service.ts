import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Board } from '../models/board';
import { BoardColumn } from '../models/boardColumn';

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
    return this.http.get<Board>(this.API_URL + 'boards/' + boardId).pipe(map((boardData) => {
      let { board, columns, issues } = boardData;
      console.warn(issues);
      board.columns = [];
      board.columns.push(columns[0]);
      board.columns.forEach((column) => {
        const issuesForColumn = issues.filter(x => x.column_id === column.id);
        column.issues = [];
        column.issues = issuesForColumn;
      });
      return board;
    }));
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

  createNewIssue(board: Board, column: BoardColumn, issue: string): Observable<Board> {
    return this.http.post<Board>(`${this.API_URL}boards/issue`, { id: board['_id'], columnId: column.id, issueText: issue })
  }
}
