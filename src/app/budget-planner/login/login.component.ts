import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;
  registerForm: FormGroup;
  isLoginMode = true; // Toggle between login and register

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(
        (response) => {
          console.log('Login successful', response);
          // Handle successful login (e.g., redirect to dashboard)
        },
        (error) => {
          console.error('Login failed', error);
          // Handle login error (e.g., show error message)
        }
      );
    }
  }

  onRegister() {
    if (this.registerForm.valid) {
      this.authService.regsister(this.registerForm.value).subscribe(
        (response) => {
          console.log('Registration successful', response);
          // Handle successful registration (e.g., switch to login mode)
          this.isLoginMode = true;
        },
        (error) => {
          console.error('Registration failed', error);
          // Handle registration error (e.g., show error message)
        }
      );
    }
  }

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
  }
}
