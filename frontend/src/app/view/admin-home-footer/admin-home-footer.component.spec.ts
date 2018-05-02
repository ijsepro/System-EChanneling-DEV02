import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHomeFooterComponent } from './admin-home-footer.component';

describe('AdminHomeFooterComponent', () => {
  let component: AdminHomeFooterComponent;
  let fixture: ComponentFixture<AdminHomeFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminHomeFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHomeFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
