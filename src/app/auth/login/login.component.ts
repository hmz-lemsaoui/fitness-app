import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'mg-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  private readonly router = inject(Router);
  private readonly authService = inject(AuthService);

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }
  submitLogin() {
    if (this.loginForm.invalid) return;

    // send the login form
    this.authService.SignIn(this.loginForm.value).then(() => {
      // redirect the user to the dashboard
      this.router.navigate(['']);
    });
  }

  get getControls() {
    return this.loginForm.controls;
  }
}
