import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHedderComponent } from './home-hedder.component';

describe('HomeHedderComponent', () => {
  let component: HomeHedderComponent;
  let fixture: ComponentFixture<HomeHedderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeHedderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeHedderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
