import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLoyaltyComponent } from './list-loyalty.component';

describe('ListLoyaltyComponent', () => {
  let component: ListLoyaltyComponent;
  let fixture: ComponentFixture<ListLoyaltyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLoyaltyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLoyaltyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
