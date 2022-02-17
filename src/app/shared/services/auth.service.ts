import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import firebase from "firebase/compat";
import User = firebase.User;
import {IUser} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user!: User;

  constructor(private fireBaseAuth: AngularFireAuth, private fireStore: AngularFirestore, private router: Router) {
    this.fireBaseAuth.authState.subscribe(state => {
      if (state) {
        console.log("setting localstorage")
        localStorage.setItem('user', JSON.stringify(state))
        this.user = state;
      } else {
        localStorage.setItem('user', '')

      }
      console.log("state ", state)
    })
  }


  createUser(email: string, password: string, payload: IUser) {

    this.fireBaseAuth.createUserWithEmailAndPassword(email, password).then(res => {
      console.log("creation result ", res.user?.uid)
      let userObj: IUser = {...payload};
      if (res.user?.uid) {
         userObj.id = res.user?.uid
        return this.fireStore.collection('users').doc(res.user.uid).set(userObj).then(res => {
          this.router.navigate(['login'])
        })
      }

      return null

    })

  }

  signin(email: string, password: string): Promise<any> {
    return this.fireBaseAuth.signInWithEmailAndPassword(email, password)

  }

  signout() {
    this.fireBaseAuth.signOut().then(res => {
      this.router.navigate(['login'])
    });

  }


  isAuth() {
    let userData = localStorage.getItem('user')
    if (userData && userData.length > 0) {
      return true;
    } else {
      return false;
    }
  }

}
