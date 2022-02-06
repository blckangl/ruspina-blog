import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {MyErrorStateMatcher} from "../login-page/login-page.component";
import {countryList} from "../../shared/utils";
import {User} from "../../shared/models/user";
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);
  firstNameFormControl = new FormControl('', [Validators.required]);
  lastNameFormControl = new FormControl('', [Validators.required]);
  countryFormControl = new FormControl('', [Validators.required]);

  birhday = new FormControl('', [Validators.required]);

  countryList = countryList;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  register() {
    this.authService.createUser(this.emailFormControl.value, this.passwordFormControl.value)
    // console.log(this.emailFormControl.value)
    // const user: User =
    //   {
    //     birthday: new Date(), date_creation: new Date(),
    //     id: 'zaez',
    //     firstName: this.firstNameFormControl.value,
    //     lastName: this.lastNameFormControl.value,
    //     email: this.emailFormControl.value,
    //     country: this.countryFormControl.value,
    //     password: this.passwordFormControl.value
    //   }
    //   console.log(user);
  }

  matcher = new MyErrorStateMatcher();
}
