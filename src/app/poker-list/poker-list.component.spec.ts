import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokerListComponent } from './poker-list.component';

describe('PokerListComponent', () => {
  let component: PokerListComponent;
  let fixture: ComponentFixture<PokerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
