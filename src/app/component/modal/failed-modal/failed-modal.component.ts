import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-failed-modal',
  templateUrl: './failed-modal.component.html',
  styleUrls: ['./failed-modal.component.css']
})
export class FailedModalComponent {

  constructor(private dialogRef: MatDialogRef<FailedModalComponent>) { }

  closeModal() {
    this.dialogRef.close();
  }

}
