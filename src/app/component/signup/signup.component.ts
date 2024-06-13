import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {SignupService} from 'src/app/services/signup/signup.service';
import {MatDialogRef} from "@angular/material/dialog";
import {SuccessModalComponent} from "../modal/success-modal/success-modal.component";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  registerForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private signUpService: SignupService,
    private dialogRef: MatDialogRef<SuccessModalComponent>,
  ) {
  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required, this.confirmationValidate]]

    });
  }

  confirmationValidate = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return {required: true};
    } else if (control.value !== this.registerForm.controls['password'].value) {
      return {confirm: true, error: true};
    }
    return {};
  };


  signUp() {
    if (this.registerForm.valid) {
      this.signUpService.registerUser(this.registerForm.value).subscribe(
        (res) => {
          console.log(res);

          this.dialogRef.close();

        },
        (err) => {
          console.log(err);
        }
      );
    }
  }

}
