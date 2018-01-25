import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { BaseComponent } from "../shared/base/base.component";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent extends BaseComponent implements OnInit {
  user: string = "";
  pass: string = "";

  constructor(private router: Router) {
    super();
  }

  ngOnInit() {

  }

  onLoggedin() {
    localStorage.setItem('isLoggedin', 'true');
    this.router.navigate(['dashboard']);
  }
}
