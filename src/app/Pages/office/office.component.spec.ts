import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeComponent } from './office.component';

describe('OfficeComponent', () => {
  let component: OfficeComponent;
  let fixture: ComponentFixture<OfficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OfficeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
