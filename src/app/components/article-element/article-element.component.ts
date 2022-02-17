import {Component, Input, OnInit} from '@angular/core';
import {Article} from "../../shared/models/article";
import {ArticleService} from "../../shared/services/article.service";

@Component({
  selector: 'app-article-element',
  templateUrl: './article-element.component.html',
  styleUrls: ['./article-element.component.scss']
})
export class ArticleElementComponent implements OnInit {

  @Input() article!:Article;
  constructor(private articleService:ArticleService) { }

  ngOnInit(): void {
  }

  like() {
    this.articleService.likeArticle(this.article)
  }
}
