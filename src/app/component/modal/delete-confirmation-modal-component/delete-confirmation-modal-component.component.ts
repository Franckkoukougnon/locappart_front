import { Component } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-delete-confirmation-modal-component',
  templateUrl: './delete-confirmation-modal-component.component.html',
  styleUrls: ['./delete-confirmation-modal-component.component.css']
})
export class DeleteConfirmationModalComponentComponent {

  constructor(public activeModal: NgbActiveModal) {}

  confirm() {
    this.activeModal.close(true);
  }

  cancel() {
    this.activeModal.dismiss(false);
  }

}
