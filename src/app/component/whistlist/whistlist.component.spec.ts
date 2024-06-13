import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhistlistComponent } from './whistlist.component';

describe('WhistlistComponent', () => {
  let component: WhistlistComponent;
  let fixture: ComponentFixture<WhistlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhistlistComponent]
    });
    fixture = TestBed.createComponent(WhistlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
