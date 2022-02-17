import {Injectable} from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
  DocumentReference
} from "@angular/fire/compat/firestore";
import {Article} from "../models/article";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private fireStore: AngularFirestore, private _snackBar: MatSnackBar) {
  }


  addArticle(article: Article) {
    let payload = {...article};

    this.fireStore.collection("articles").add(article).then(res => {
      payload.id = res.id;
      this.fireStore.collection("articles").doc(res.id).set(payload).then(article => {
        this._snackBar.open('Article created with success', 'Creation', {duration: 3000})
      }).catch(err => {
        this._snackBar.open(err,'Creation', {duration: 3000})

      });
    }).catch(err => {
      this._snackBar.open(err,'Creation', {duration: 3000})
    })
  }
  getArticles():AngularFirestoreCollection<Article>{
    return this.fireStore.collection('articles')
  }
  getArticle(id:string):AngularFirestoreDocument<Article>{
    return this.fireStore.doc('articles/'+id)
  }
}
