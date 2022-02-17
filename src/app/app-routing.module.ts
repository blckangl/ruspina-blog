import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {RegisterPageComponent} from "./pages/register-page/register-page.component";
import {NotFoundPageComponent} from "./pages/not-found-page/not-found-page.component";
import {CategoryArticlePageComponent} from "./pages/category-article-page/category-article-page.component";
import {HomeLayoutPageComponent} from "./pages/home-layout-page/home-layout-page.component";
import {CreateArticleComponent} from "./pages/create-article/create-article.component";
import {ArticlePageComponent} from "./pages/article-page/article-page.component";

const routes: Routes = [
  {path:'',component:HomeLayoutPageComponent ,children:[
      {path:'',component:HomePageComponent},
      {path:'category',component:CategoryArticlePageComponent}
    ]},
  {path:'create',component:CreateArticleComponent},
  {path:'article/:id',component:ArticlePageComponent},
  {path:'login',component:LoginPageComponent},
  {path:'register',component:RegisterPageComponent},
  {path:'**',component:NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
