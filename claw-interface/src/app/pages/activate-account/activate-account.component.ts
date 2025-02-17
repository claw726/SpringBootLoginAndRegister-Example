import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/services';

@Component({
  selector: 'app-activate-account',
  standalone: false,
  templateUrl: './activate-account.component.html',
  styleUrl: './activate-account.component.scss',
})
export class ActivateAccountComponent {
  message: string = '';
  isOkay: boolean = true;
  submitted: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {}

  onCodeCompleted(token: string): void {
    this.confirmAccount(token);
  }

  confirmAccount(token: string) {
    this.authService.confirm({
      token
    }).subscribe ({
      next: () => {
        this.message = "Your account has been successfully activated.\nNow you may proceed to login.";
        this.submitted = true;
        this.isOkay = true;
      }, error: () => {
        this.message = "Token has expired or is invalid.";
        this.submitted = true;
        this.isOkay = false;
      }
    })
  }

  redirectToLogin(): void {
    this.router.navigate(['login']);
  }
}
