import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BailleurComponent } from './bailleur.component';

describe('BailleurComponent', () => {
  let component: BailleurComponent;
  let fixture: ComponentFixture<BailleurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BailleurComponent]
    });
    fixture = TestBed.createComponent(BailleurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
