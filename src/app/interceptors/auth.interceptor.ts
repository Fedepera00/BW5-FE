import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from "@angular/common/http";
import { Observable, switchMap } from "rxjs";
import { AuthService } from "../services/auth-service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authSvc: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url.includes("/login")) {
      return next.handle(request);
    }

    return this.authSvc.authSubject$.pipe(
      switchMap((accessData) => {
        if (!accessData || !accessData.token) {
          console.log("Nessun token trovato, richiesta inviata senza header Authorization");
          return next.handle(request);
        }

        const newRequest = request.clone({
          headers: request.headers.append("Authorization", `Bearer ${accessData.token}`),
        });

        console.log("Nuova richiesta con token:", newRequest);
        return next.handle(newRequest);
      })
    );
  }
}
