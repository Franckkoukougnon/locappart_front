import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {Appartement} from "../../../model/appartement.model";

@Component({
  selector: 'app-edit-appartement-modal',
  templateUrl: './edit-appartement-modal.component.html',
})
export class EditAppartementModalComponent {

  @Input() selectedAppartement!: Appartement;

  constructor(public activeModal: NgbActiveModal) {}

  saveEdit() {
    // Implémentez la logique de sauvegarde de la modification ici
    this.activeModal.close(this.selectedAppartement);
  }

  cancelEdit() {
    this.activeModal.dismiss('cancel');
  }
}
