import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Board } from '../models/board';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  private API_URL = "http://localhost:3000/"

  constructor(private http: HttpClient) { }

  getAllTrelloBoards(): Observable<Board[]> {
    return this.http.get<Board[]>('http://localhost:3000/boards/all');
  }

  getTrelloBoard(boardId: string): Observable<Board> {
    return this.http.get<Board>('http://localhost:3000/boards/' + boardId);
  }

  createTrelloBoard(board: Board): Observable<Board> {
    return this.http.post<Board>('http://localhost:3000/boards', board);
  }
}
