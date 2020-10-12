import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Board } from 'src/app/modules/boardOverview/models/board';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  private API_URL = "http://localhost:3000/"

  constructor(private http: HttpClient) { }

  getAllTrelloBoards(): Observable<Board[]> {
    return this.http.get<Board[]>('http://localhost:3000/boards');
  }

  getTrelloBoard(): void {
    console.log('getTrelloBoard');
  }
}
