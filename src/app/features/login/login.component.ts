import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from './login.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  signInForm: FormGroup;

  constructor(
    private signInService: LoginService,
    private _snackBar: MatSnackBar
  ) {
    this.signInForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    this._snackBar.dismiss();

    const { email, password } = this.signInForm.value;
    if (!email) {
      return this._snackBar.open('Email is required', 'Close');
    }

    if (!password) {
      return this._snackBar.open('Password is required', 'Close');
    }

    this.signInForm.disable();

    return this.signInService.signIn(email, password).subscribe({
      next: () => {
        this.signInForm.enable();
      },
      error: (err) => {
        console.error(err);
        this.signInForm.enable();

        switch (err?.error?.message) {
          case 'Invalid Email':
            return this._snackBar.open(
              'Could not find an account with that email. Sign up instead.',
              'Close'
            );
          default:
            return this._snackBar.open(
              'Something went wrong, try again later',
              'Close'
            );
        }
      },
    });
  }
}
