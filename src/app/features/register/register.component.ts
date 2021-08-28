import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegisterService } from './register.service';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  signUpForm: FormGroup;

  constructor(
    private signUpService: RegisterService,
    private _snackBar: MatSnackBar
  ) {
    this.signUpForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    this._snackBar.dismiss();

    const { email, password } = this.signUpForm.value;
    if (!email) {
      return this._snackBar.open('Email is required', 'Close');
    }

    if (!password) {
      return this._snackBar.open('Password is required', 'Close');
    }

    this.signUpForm.disable();

    return this.signUpService.signUp(email, password).subscribe({
      next: () => {
        this.signUpForm.enable();
      },
      error: (err) => {
        console.error(err);
        this.signUpForm.enable();

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
