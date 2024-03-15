import { Component, inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'mg-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  registerForm!: FormGroup;

  private readonly router = inject(Router);
  private readonly authService = inject(AuthService);

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.email]),
      password: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
    });
  }
  submitRegister() {
    if (this.registerForm.invalid) return;

    // send the login form
    this.authService.SignUp(this.registerForm.value).then(() => {
      // redirect the user to the dashboard
      this.router.navigate(['']);
    });
  }

  get getControls() {
    return this.registerForm.controls;
  }
}
