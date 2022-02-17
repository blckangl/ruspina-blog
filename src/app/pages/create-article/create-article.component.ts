import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {Article} from "../../shared/models/article";
import {AuthService} from "../../shared/services/auth.service";
import {ArticleService} from "../../shared/services/article.service";

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit {
  titleFormControl = new FormControl('');
  descriptionFormControl = new FormControl('');
  contentFromControl = new FormControl('');
  pictureFormControl = new FormControl('');

  constructor(private authService: AuthService, private articleService: ArticleService) {
  }

  ngOnInit(): void {
  }

  addArticle() {
    if (this.authService.user) {
      let article: Article = {
        comments: new Array<Comment>(),
        content: this.contentFromControl.value,
        createdBy: this.authService.user?.id,
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
}
