import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { CategoryArticlePageComponent } from './pages/category-article-page/category-article-page.component';
import { ArticlePageComponent } from './pages/article-page/article-page.component';
import { HomeLayoutPageComponent } from './pages/home-layout-page/home-layout-page.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import {MatButtonModule} from '@angular/material/button';
import { ArticlesNavComponent } from './components/articles-nav/articles-nav.component';
import {MatIconModule} from '@angular/material/icon';
import { ArticleElementComponent } from './components/article-element/article-element.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatCardModule} from '@angular/material/card';
import { ArticleListComponent } from './components/article-list/article-list.component';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    NotFoundPageComponent,
    CategoryArticlePageComponent,
    ArticlePageComponent,
    HomeLayoutPageComponent,
    TopNavComponent,
    ArticlesNavComponent,
    ArticleElementComponent,
    ArticleListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
