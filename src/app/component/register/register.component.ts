import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {SignupService} from "../../services/signup/signup.service";
import {Router} from "@angular/router";
import {FailedModalComponent} from "../modal/failed-modal/failed-modal.component";
import {MatDialog} from "@angular/material/dialog";
import {SuccessModalComponent} from "../modal/success-modal/success-modal.component";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  errorMessage!: string;

  constructor(
    private fb: FormBuilder,
    private signUpService: SignupService,
    private router: Router,
    private dialog: MatDialog,
  ) { }

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
      return { required: true };
    } else if (control.value !== this.registerForm.controls['password'].value) {
      return { confirm: true, error: true };
    }
    return {};
  };




  signUp() {
    if (this.registerForm.valid) {
      this.signUpService.registerUser(this.registerForm.value).subscribe(

        (res) => {
         // console.log(res);
          this.openSuccessModal();
       //   this.router.navigate(['/login']);
        },
        (err) => {
          console.log(err);
          this.errorMessage = err;
        }
      );
    }
  }

  openSuccessModal(): void {
    const dialogRef = this.dialog.open(SuccessModalComponent, {
      width: '400px', // Ajustez la largeur selon vos besoins
    });

    // Si vous souhaitez effectuer une action après la fermeture du modal
    dialogRef.afterClosed().subscribe(() => {
      console.log('Modal closed');
    });
  }


}
