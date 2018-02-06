import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { BaseComponent } from "../shared/base/base.component";
import { AlertService } from './../shared/modules/alert/alert.service';
import { LoginResultEntity } from './../shared/models/auth/loginResult.model';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent extends BaseComponent implements OnInit {
  user: string = "";
  pass: string = "";

  constructor(private router: Router, alert: AlertService) {
    super(alert);
  }

  ngOnInit() {
  }

  onLoggedin() {
    // Usuário de desenvolvimento
    const authUser = LoginResultEntity.GetInstance();
    authUser.authenticationToken = "qwert";
    authUser.loginAccept = true;
    authUser.userName = "Developer Mode";
    authUser.type = 2;
    authUser.userId = 0;

    // Authenticando usuário
    localStorage.setItem('isLoggedin', 'true');
    localStorage.setItem('authUser', JSON.stringify(authUser));

    this.router.navigate(['dashboard']);
  }
}
