import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";

@Component({
  selector: 'app-bailleur-modal',
  templateUrl: './bailleur-modal.component.html',
  styleUrls: ['./bailleur-modal.component.css']
})
export class BailleurModalComponent {

  constructor(private dialogRef: MatDialogRef<BailleurModalComponent>,private router: Router) { }

  closeModal() {
    this.dialogRef.close();
    this.router.navigate(['/dashboard']);
  }

}
