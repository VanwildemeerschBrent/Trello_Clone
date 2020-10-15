import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Board } from '../models/board';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  private API_URL = "https://trello-clone-api-bv.herokuapp.com/"

  constructor(private http: HttpClient) { }

  getAllTrelloBoards(): Observable<Board[]> {
    return this.http.get<Board[]>(`${this.API_URL}`);
  }

  getTrelloBoard(boardId: string): Observable<Board> {
    return this.http.get<Board>(`${this.API_URL}${boardId}`);
  }

  createTrelloBoard(board: Board): Observable<Board> {
    return this.http.post<Board>(this.API_URL, board);
  }
}
