import { Component } from "@angular/core";
import { HomeService } from "../../services/home.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {
  clienti: any[] = [];
  constructor(private homeServ: HomeService) {}

  ngOnInit() {
    this.getAllClienti();
  }

  getAllClienti() {
    this.homeServ.getAllClienti(0, 10, "id").subscribe((response) => (this.clienti = response.content));
  }
}
