import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLayoutPageComponent } from './home-layout-page.component';

describe('HomeLayoutPageComponent', () => {
  let component: HomeLayoutPageComponent;
  let fixture: ComponentFixture<HomeLayoutPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeLayoutPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLayoutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
