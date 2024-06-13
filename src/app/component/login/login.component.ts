import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {SignupService} from 'src/app/services/signup/signup.service';
import {MatDialog} from "@angular/material/dialog";
import {FailedModalComponent} from "../modal/failed-modal/failed-modal.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm!: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder,
              private dialog: MatDialog,
              private connect: SignupService,
              private router: Router) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.connect.loginUser(this.loginForm.value).subscribe(
        (res) => {
        //  console.log(res);
       //   console.log('welcome' + this.loginForm.value.username);

          this.router.navigate(['/home']);
        },
        (err) => {
          console.log(err);
          this.openSuccessModal();
          this.errorMessage = 'Username or password is incorrect';
        }
      );
    }
  }

  openSuccessModal() {
    this.dialog.open(FailedModalComponent);
  }


}
