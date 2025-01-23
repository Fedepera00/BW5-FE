import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavComponent } from "./main-component/nav/nav.component";
import { FooterComponent } from "./main-component/footer/footer.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTabsModule } from "@angular/material/tabs";
import { MatCardModule } from "@angular/material/card";

@NgModule({
  declarations: [AppComponent, NavComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule, MatTabsModule, HttpClientModule, BrowserAnimationsModule, MatCardModule],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptor,
    //   multi: true,
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
