import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveHospitalComponent } from './remove-hospital.component';

describe('RemoveHospitalComponent', () => {
  let component: RemoveHospitalComponent;
  let fixture: ComponentFixture<RemoveHospitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveHospitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
