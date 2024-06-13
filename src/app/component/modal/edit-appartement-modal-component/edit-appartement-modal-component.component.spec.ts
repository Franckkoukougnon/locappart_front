import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAppartementModalComponentComponent } from './edit-appartement-modal-component.component';

describe('EditAppartementModalComponentComponent', () => {
  let component: EditAppartementModalComponentComponent;
  let fixture: ComponentFixture<EditAppartementModalComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditAppartementModalComponentComponent]
    });
    fixture = TestBed.createComponent(EditAppartementModalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
