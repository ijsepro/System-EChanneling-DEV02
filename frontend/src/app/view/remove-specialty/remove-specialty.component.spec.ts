import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveSpecialtyComponent } from './remove-specialty.component';

describe('RemoveSpecialtyComponent', () => {
  let component: RemoveSpecialtyComponent;
  let fixture: ComponentFixture<RemoveSpecialtyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveSpecialtyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveSpecialtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
