import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetMainComponent } from './tweet-main.component';

describe('TweetMainComponent', () => {
  let component: TweetMainComponent;
  let fixture: ComponentFixture<TweetMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TweetMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
