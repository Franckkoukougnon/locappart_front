import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BailleurModalComponent } from './bailleur-modal.component';

describe('BailleurModalComponent', () => {
  let component: BailleurModalComponent;
  let fixture: ComponentFixture<BailleurModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BailleurModalComponent]
    });
    fixture = TestBed.createComponent(BailleurModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
