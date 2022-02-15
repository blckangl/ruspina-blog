import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {User} from "../models/user";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user!: User | undefined;

  constructor(private fireBaseAuth: AngularFireAuth, private fireStore: AngularFirestore, private router: Router) {
    this.fireBaseAuth.authState.subscribe(state => {
      if(state && state.uid){
        this.fireStore.collection('users').doc(state.uid).valueChanges().subscribe(user => {
          this.user = user as User;
          // this.router.navigate([''])
        })

      }else{
        this.user = undefined
      }
      console.log("state ", state)
    })
  }


  createUser(email: string, password: string, payload: User) {

    this.fireBaseAuth.createUserWithEmailAndPassword(email, password).then(res => {
      console.log("creation result ", res.user?.uid)
      let userObj: User = {...payload};
      if (res.user?.uid) {
        userObj.id = res.user?.uid
        return this.fireStore.collection('users').doc(userObj.id).set(userObj).then(res => {
          this.router.navigate(['login'])
        })
      }

      return null

    })

  }

  signin(email: string, password: string) {
    this.fireBaseAuth.signInWithEmailAndPassword(email, password).then(res => {
      if (res.user?.uid) {
        this.fireStore.collection('users').doc(res.user.uid).valueChanges().subscribe(user => {
          this.user = user as User;
          this.router.navigate([''])
        })

      }
    }).catch(err => {
      console.log("login error", err)
    })
  }

  signout() {
    this.fireBaseAuth.signOut().then(res => {
      this.router.navigate(['login'])
    });

  }



  isAuth() {
    if (this.user) {
      return true;
    } else {
      return false;
    }
  }

}
