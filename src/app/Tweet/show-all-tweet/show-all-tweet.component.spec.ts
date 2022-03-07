import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllTweetComponent } from './show-all-tweet.component';

describe('ShowAllTweetComponent', () => {
  let component: ShowAllTweetComponent;
  let fixture: ComponentFixture<ShowAllTweetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllTweetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllTweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
