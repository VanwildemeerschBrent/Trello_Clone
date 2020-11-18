import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { BoardComponent } from './components/board/board.component';
import { BoardPreviewComponent } from './components/board-preview/board-preview.component';
import { BoardOverviewComponent } from './components/board-overview/board-overview.component';
import { BoardColumnComponent } from './components/boardColumn/boardColumn.component';
import { CreateBoardPopupComponent } from './components/createBoardPopup/createBoardPopup.component';
import { CreateNewColumnComponent } from './components/createNewColumn/createNewColumn.component';
import { EditIssuePopupComponent } from './components/editIssuePopup/editIssuePopup.component';
import { IssueCardComponent } from './components/issueCard/issueCard.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../core/components/home/home.component';




@NgModule({
  declarations: [
    BoardComponent,
    BoardPreviewComponent,
    BoardOverviewComponent,
    BoardColumnComponent,
    CreateBoardPopupComponent,
    CreateNewColumnComponent,
    EditIssuePopupComponent,
    IssueCardComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild([
      {
        path: 'main', component: HomeComponent, children: [
          { path: 'overview', component: BoardOverviewComponent },
          { path: 'board/:id', component: BoardComponent }
        ]
      },
    ])

  ]
})
export class BoardModule { }
