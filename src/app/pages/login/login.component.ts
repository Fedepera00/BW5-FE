import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth-service";
import { Router } from "@angular/router";
import { iLoginRequest } from "../../interfaces/i-login-request";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent {
  loginForm!: FormGroup;
  loginError: string | null = null;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.fb.group({
      username: ["", [Validators.required]],
      password: ["", [Validators.required]]
    });
  }

  login() {
    if (this.loginForm.valid) {
      const authData: iLoginRequest = this.loginForm.value;

      this.authService.login(authData).subscribe(
        () => {
          this.router.navigate(["/home"]);
        },
        (error) => {
          this.loginError = "Credenziali non valide. Riprova.";
          console.error("Errore durante il login:", error);
        }
      );
    }
  }

  get username() {
    return this.loginForm.get("username");
  }

  get password() {
    return this.loginForm.get("password");
  }
}
