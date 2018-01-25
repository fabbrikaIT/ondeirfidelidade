import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";

import { AppConfig } from "../config/app.config";
import { LoginResultEntity } from "../models/auth/loginResult.model";

export abstract class BaseService {
  public loginInfo: LoginResultEntity = JSON.parse(
    localStorage.getItem("loginInfo")
  );

  constructor(protected config: AppConfig, protected router: Router) {
    if (localStorage.getItem("loginInfo") === null) {
      this.endSession();
    }
  }

  protected handleErrorObservable(error: Response | any, caugth: any) {
    const err = JSON.parse(error._body);

    return Observable.throw(err.errorMessage || err);
  }

  private endSession() {
    localStorage.removeItem("isLoggedin");
    localStorage.removeItem("loginInfo");
    this.router.navigate(["login"]);
  }
}
