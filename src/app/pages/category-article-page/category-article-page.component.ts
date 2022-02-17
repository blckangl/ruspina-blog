import {Component, OnInit} from '@angular/core';
import {Article} from "../../shared/models/article";
import {ArticleService} from "../../shared/services/article.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-category-article-page',
  templateUrl: './category-article-page.component.html',
  styleUrls: ['./category-article-page.component.scss']
})
export class CategoryArticlePageComponent implements OnInit {
  articles!: Array<Article>
  currentCategory!: string;

  constructor(private articleService: ArticleService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.currentCategory = params['cat']
      this.articleService.getArticles(this.currentCategory).valueChanges().subscribe(articles => {
        console.log(articles);
        this.articles = articles;
      })

    })
  }

}
