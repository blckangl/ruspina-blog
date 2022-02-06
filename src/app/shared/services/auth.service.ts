import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireBaseAuth: AngularFireAuth) { }


  createUser(email:string,password:string){

    this.fireBaseAuth.createUserWithEmailAndPassword(email,password).then(res=>{
      console.log("creation result ",res)
    })

  }

  signin(email:string,password:string){
    this.fireBaseAuth.signInWithEmailAndPassword(email,password).then(res=>{
      console.log(res);
    }).catch(err=>{
      console.log("login error",err)
    })
  }

}
