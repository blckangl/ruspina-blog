import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {AuthService} from "../../shared/services/auth.service";
import {IUser} from "../../shared/models/user";

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit,AfterViewChecked {

  user!: IUser | undefined;

  constructor(private authService: AuthService) {
  }

  ngAfterViewChecked(): void {
    if (this.authService.isAuth()) {
      let userData = localStorage.getItem('user');
      if (userData)
        this.user = JSON.parse(userData)
    } else {
      this.user = undefined
    }
    }

  ngOnInit(): void {

  }

  logout() {
    this.authService.signout();
  }

}
