import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoyaltyComponent } from './user-loyalty.component';

describe('ListLoyaltyComponent', () => {
  let component: UserLoyaltyComponent;
  let fixture: ComponentFixture<UserLoyaltyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLoyaltyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLoyaltyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
