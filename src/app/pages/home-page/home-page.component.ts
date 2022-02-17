import {Component, OnInit} from '@angular/core';
import {ArticleService} from "../../shared/services/article.service";
import {Article} from "../../shared/models/article";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private articleService: ArticleService) {
  }

  articles!: Array<Article>

  ngOnInit(): void {
    this.articleService.getArticles().valueChanges().subscribe(articles => {
      this.articles = articles
    })
  }

}
