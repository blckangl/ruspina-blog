import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryArticlePageComponent } from './category-article-page.component';

describe('CategoryArticlePageComponent', () => {
  let component: CategoryArticlePageComponent;
  let fixture: ComponentFixture<CategoryArticlePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryArticlePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryArticlePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
