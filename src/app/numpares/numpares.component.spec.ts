import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumparesComponent } from './numpares.component';

describe('NumparesComponent', () => {
  let component: NumparesComponent;
  let fixture: ComponentFixture<NumparesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NumparesComponent]
    });
    fixture = TestBed.createComponent(NumparesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
