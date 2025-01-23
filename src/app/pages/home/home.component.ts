import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { HomeService } from "../../services/home.service";
import { timeInterval } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {
  cliente!: any;
  constructor(private homeServ: HomeService) {}

  ngOnInit() {
    this.getById();
    setTimeout(() => console.log(this.cliente), 4000);
  }

  getById() {
    this.homeServ.getById(1).subscribe((response) => (this.cliente = response));
  }
}
