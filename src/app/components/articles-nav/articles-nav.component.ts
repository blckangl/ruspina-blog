import {Component, OnInit} from '@angular/core';
import {categories} from "../../shared/utils";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-articles-nav',
  templateUrl: './articles-nav.component.html',
  styleUrls: ['./articles-nav.component.scss']
})
export class ArticlesNavComponent implements OnInit {
  categories!: Array<String>;
  currentPath = '';

  constructor(private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    console.log(this.router.url)
    this.currentPath = this.router.url

    this.categories = categories;
  }

}
