import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";

@Component({
  selector: ".app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"],
})
export class NavComponent implements OnInit {
  selectedIndex = 0;
  routes = ["/", "/login", "/home", "/create-cliente"];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const index = this.routes.indexOf(event.urlAfterRedirects);
        if (index !== -1) {
          this.selectedIndex = index;
        }
      }
    });
  }

  navigate(index: number): void {
    this.router.navigate([this.routes[index]]);
  }
}
