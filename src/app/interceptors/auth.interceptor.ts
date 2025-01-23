// import { Injectable } from "@angular/core";
// import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
// import { Observable } from "rxjs";

// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {
//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     // Recupera il token da localStorage
//     const accessData = localStorage.getItem("accessData");
//     const token = accessData ? JSON.parse(accessData).accessToken : null;
//     if (token) {
//       // Clona la richiesta e aggiunge l'header Authorization
//       const authReq = req.clone({
//         headers: req.headers.set("Authorization", `Bearer ${token}`),
//       });
//       return next.handle(authReq);
//     }
//     console.log("Token JWT recuperato:", token);
//     // Se non c'è un token, passa la richiesta originale
//     return next.handle(req);
//   }
// }
