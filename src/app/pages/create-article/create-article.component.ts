import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {Article} from "../../shared/models/article";
import {AuthService} from "../../shared/services/auth.service";
import {ArticleService} from "../../shared/services/article.service";
import {categories} from "../../shared/utils";

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit {
  categories:Array<String>;
  titleFormControl = new FormControl('');
  categoryFormControl = new FormControl('');
  descriptionFormControl = new FormControl('');
  contentFromControl = new FormControl('');
  pictureFormControl = new FormControl('');

  constructor(private authService: AuthService, private articleService: ArticleService) {
    this.categories = categories
  }

  ngOnInit(): void {
  }

  addArticle() {

      let article: Article = {
        category: this.categoryFormControl.value,
        comments: new Array<Comment>(),
        content: this.contentFromControl.value,
        createdBy: this.authService.user?.uid,
        date_creation: new Date(),
        description: this.descriptionFormControl.value,
        id: "",
        img: this.pictureFormControl.value,
        likes: 0,
        title: this.titleFormControl.value
      }
      this.articleService.addArticle(article);
      console.log(article)


  }
}
