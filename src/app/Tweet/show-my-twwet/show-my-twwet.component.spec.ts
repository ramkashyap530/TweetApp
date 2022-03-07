import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMyTwwetComponent } from './show-my-twwet.component';

describe('ShowMyTwwetComponent', () => {
  let component: ShowMyTwwetComponent;
  let fixture: ComponentFixture<ShowMyTwwetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMyTwwetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMyTwwetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
