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


  // Trello Board Instances
  getAllTrelloBoards(): Observable<Board[]> {
    return this.http.get<Board[]>(this.API_URL + 'boards/all');
  }

  getTrelloBoard(boardId: string): Observable<Board> {
    return this.http.get<Board>(this.API_URL + 'boards/' + boardId).pipe(map((boardData) => {
      return boardData;
    }));
  }

  createTrelloBoard(board: Board): Observable<Board> {
    return this.http.post<Board>(this.API_URL + 'boards', board);
  }


  // Trello Board Column instances

  createNewBoardColumn(board: Board, columnName: string): Observable<Board> {
    return this.http.post<Board>(`${this.API_URL}boards/column`, { id: board['_id'], name: columnName });
  }

  updateBoardColumn(columnId: String): Observable<BoardColumn> {
    return this.http.put<BoardColumn>(`${this.API_URL}boards/column/${columnId}`, {});

  }

  deleteBoardColumn(columnId: String): Observable<BoardColumn> {
    return this.http.delete<BoardColumn>(`${this.API_URL}boards/column/${columnId}`);
  }

  // Trello Board Issue instance
  createNewIssue(board: Board, column: BoardColumn, issue: string): Observable<Board> {
    return this.http.post<Board>(`${this.API_URL}boards/issue`, { id: board['_id'], columnId: column.id, issueText: issue })
  }
  updateIssue(board: Board, column: BoardColumn, issue: string): Observable<Board> {
    return this.http.put<Board>(`${this.API_URL}boards/issue`, { id: board['_id'], columnId: column.id, issueText: issue })
  }
  deleteIssue(board: Board, column: BoardColumn, issue: string): Observable<Board> {
    return this.http.delete<Board>(`${this.API_URL}boards/issue`)
  }
}
