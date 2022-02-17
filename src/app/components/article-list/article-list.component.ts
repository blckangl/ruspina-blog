import {Component, Input, OnInit} from '@angular/core';
import {Article} from "../../shared/models/article";

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  @Input() articles!:Array<Article>;
  constructor() { }

  ngOnInit(): void {
  }

}
