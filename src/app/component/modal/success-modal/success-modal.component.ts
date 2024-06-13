import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";

@Component({
  selector: 'app-success-modal',
  templateUrl: './success-modal.component.html',
  styleUrls: ['./success-modal.component.css']
})
export class SuccessModalComponent {

  constructor(private dialogRef: MatDialogRef<SuccessModalComponent>,private router: Router) { }

  closeModal() {
    this.dialogRef.close();
    this.router.navigate(['/login']);
  }

}
