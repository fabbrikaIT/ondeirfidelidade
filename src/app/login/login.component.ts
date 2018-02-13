import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { BaseComponent } from "../shared/base/base.component";
import { AlertService } from './../shared/modules/alert/alert.service';
import { LoginResultEntity } from './../shared/models/auth/loginResult.model';
import { AuthService } from './../shared/services/auth.service';
import { Utils } from './../shared/utils/Utils';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent extends BaseComponent implements OnInit {
  user: string = "";
  pass: string = "";

  constructor(private router: Router, alert: AlertService, private authService: AuthService) {
    super(alert);
  }

  ngOnInit() {
  }

  onLoggedin() {
    if (this.user === "" || this.pass === "") {
      return;
    }

    this.isProcessing = true;
    const authUser = LoginResultEntity.GetInstance();

    if (this.user === "admin" && this.pass === "admin") {
      // Usuário de desenvolvimento
      authUser.authenticationToken = "qwert";
      authUser.loginAccept = true;
      authUser.userName = "Developer Mode";
      authUser.type = 2;
      authUser.userId = 0;

      this.setSession(authUser);
    } else {
      if (Utils.validateEmail(this.user)) {
        // login usuário do sistema
        this.authService.Login(this.user, this.pass).subscribe(
          ret => {
            if (ret.loginAccept) {
              this.setSession(ret);
            } else {
              this.isProcessing = false;
              this.alert.alertWarning("Login", "Tentativa de acesso não autorizada");
            }
          },
          err => {
            this.alert.alertError("Login", err);
            this.isProcessing = false;
          }
        );

      } else {
        // login Onde Ir
        this.isProcessing = false;
      }
    }
  }

  private setSession(authUser) {
    this.isProcessing = false;

    // Authenticando usuário
    localStorage.setItem('isLoggedin', 'true');
    localStorage.setItem('authUser', JSON.stringify(authUser));

    this.router.navigate(['dashboard']);
  }
}
