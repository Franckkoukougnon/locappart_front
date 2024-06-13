import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteConfirmationModalComponentComponent } from './delete-confirmation-modal-component.component';

describe('DeleteConfirmationModalComponentComponent', () => {
  let component: DeleteConfirmationModalComponentComponent;
  let fixture: ComponentFixture<DeleteConfirmationModalComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteConfirmationModalComponentComponent]
    });
    fixture = TestBed.createComponent(DeleteConfirmationModalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
