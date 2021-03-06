import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faList, faStickyNote } from '@fortawesome/free-solid-svg-icons';
import { AuthenticationService } from '../../../auth/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faList = faList;
  faStickyNote = faStickyNote;
  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  onClickLogout(): void {
    console.log('Log out');
    this.authenticationService.logout();
    this.router.navigate(['auth/login']);
  }

}
