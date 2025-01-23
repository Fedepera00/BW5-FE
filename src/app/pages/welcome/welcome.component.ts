import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth-service";
import { iAccessData } from "../../interfaces/i-access-data";
// Rimosse import inutili (iMateria, CustomValidatorsFasciaOraria, ecc.)
import { CustomValidators } from "../../custom-validators/custom-validator";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.scss"]
})
export class WelcomeComponent {
  signupForm!: FormGroup;
  hidePassword = true;
  hideConfirmPassword = true;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.initForm();
  }

  initForm() {
    this.signupForm = this.fb.group(
      {
        username: ["", Validators.required],
        nome: ["", Validators.required],
        cognome: ["", Validators.required],
        email: ["", [Validators.required, Validators.email]],
        password: ["", [Validators.required, Validators.pattern("^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[0-9]).{6,}$")]],
        confirmPassword: ["", Validators.required]
      },
      { validators: CustomValidators.passwordsMatch() }
    );
  }

  signup() {
    // Controllo password match
    const password = this.signupForm.get("password")?.value;
    const confirmPassword = this.signupForm.get("confirmPassword")?.value;

    if (password !== confirmPassword) {
      console.error("Le password non corrispondono");
      this.signupForm.get("confirmPassword")?.setErrors({ passwordsMismatch: true });
      return;
    }

    // Se il form è valido, procedo
    if (this.signupForm.valid) {
      // Creo un oggetto con i dati da inviare
      const formValue = { ...this.signupForm.value };
      delete formValue.confirmPassword; // non serve mandarla al backend

      this.authService.register(formValue).subscribe(
        (res: iAccessData) => {
          // In caso di successo, vado alla pagina di login
          this.router.navigate(["/login"]);
        },
        (error) => {
          // Gestione errori dal server
          if (error.errors) {
            Object.keys(error.errors).forEach((field) => {
              this.signupForm.get(field)?.setErrors({ serverError: error.errors[field] });
            });
          }
        }
      );
    } else {
      console.error("Il modulo non è valido");
    }
  }
}
