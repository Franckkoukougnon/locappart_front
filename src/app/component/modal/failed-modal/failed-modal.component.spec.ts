import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FailedModalComponent } from './failed-modal.component';

describe('FailedModalComponent', () => {
  let component: FailedModalComponent;
  let fixture: ComponentFixture<FailedModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FailedModalComponent]
    });
    fixture = TestBed.createComponent(FailedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
