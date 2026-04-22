import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Auth } from '../../services/auth/auth';


interface LoginData {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  standalone: true,
  imports: [FormsModule, RouterModule]
})
export class Login {
    loginData: LoginData = {
        email: '',
        password: ''
    };

    constructor(
      private auth: Auth,
      private router: Router
    ) {}

    login() {
      console.log("CLICK LOGIN"); // 👈 test
      this.auth.login(this.loginData).subscribe({
        next: (res: any) => {
          // Handle successful login
          console.log("Login réussi", res);

          // Save the token and navigate to the dashboard
          this.auth.saveToken(res.token);
          this.router.navigate(['/dashboard']);
        },
        error: (err: any) => {
          // Handle login error
          console.error("Erreur de connexion", err);
        }
      });
    }
}