import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../shared/services/auth.service";
import {User} from "../../shared/models/user";

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  user!: User | undefined;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.user = this.authService.user;
  }

  logout() {
    this.authService.signout();
  }

}
