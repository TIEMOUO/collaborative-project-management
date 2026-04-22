import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Auth } from '../../services/auth/auth';

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './inscription.html',
  styleUrls: ['./inscription.css'],
})
export class Inscription {
   registerData = {
    name: '',
    email: '',
    password: ''
  };

  confirmPassword: string = '';

  constructor(
    private auth: Auth,
    private router: Router
  ) {}

  register() {

    // 🔴 Vérification simple
    if (this.registerData.password !== this.confirmPassword) {
      alert("Les mots de passe ne correspondent pas");
      return;
    }

    this.auth.register(this.registerData).subscribe({
      next: (res: any) => {
        console.log("Inscription réussie", res);

        // redirection vers login
        this.router.navigate(['/login']);
      },
      error: (err: any) => {
        console.error("Erreur inscription", err);
      }
    });
  }
}
