import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VilleModalComponent } from './ville-modal.component';

describe('VilleModalComponent', () => {
  let component: VilleModalComponent;
  let fixture: ComponentFixture<VilleModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VilleModalComponent]
    });
    fixture = TestBed.createComponent(VilleModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
