import {Component, OnInit} from '@angular/core';
import {Article} from "../../shared/models/article";
import {ArticleService} from "../../shared/services/article.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit {
  article!: Article;
  panelOpenState = false;

  constructor(private articleService: ArticleService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params['id'])
      this.articleService.getArticle(params['id']).valueChanges().subscribe(article => {
        if(article)
        this.article = article;
      })
    })

  }

}
