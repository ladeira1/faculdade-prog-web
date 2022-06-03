import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  LoginService,
  UserCredentials,
} from 'src/app/core/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    user: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  shouldShowError = false;

  constructor(private loginService: LoginService, private router: Router) {}

  onSubmit() {
    const { user, password } = this.loginForm.value;

    this.loginService.login(user, password).subscribe({
      next: (userCredentials: UserCredentials) => {
        localStorage.setItem(
          'prova:user.credentials',
          userCredentials.credentials,
        );
        this.shouldShowError = false;
        this.router.navigateByUrl('/prova');
      },
      error: err => {
        this.shouldShowError = true;
        console.error(err);
      },
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
