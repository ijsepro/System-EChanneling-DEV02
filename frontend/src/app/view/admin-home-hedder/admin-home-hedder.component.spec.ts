import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHomeHedderComponent } from './admin-home-hedder.component';

describe('AdminHomeHedderComponent', () => {
  let component: AdminHomeHedderComponent;
  let fixture: ComponentFixture<AdminHomeHedderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminHomeHedderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHomeHedderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
