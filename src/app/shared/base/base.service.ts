import { Router } from "@angular/router";
import { Observable } from "rxjs/Rx";

import { AppConfig } from "../config/app.config";
import { LoginResultEntity } from "../models/auth/loginResult.model";

export abstract class BaseService {
  public loginInfo: LoginResultEntity = JSON.parse(
    localStorage.getItem("authUser")
  );

  constructor(protected config: AppConfig, protected router: Router) {
    if (localStorage.getItem("authUser") === null) {
      this.endSession();
    }
  }

  protected handleErrorObservable(error: Response | any, caugth: any) {
    const err = error.error;

    if (error.status === 422) {
      //return Observable.throw(err);
      return Observable.throw(err.ErrorCode + " - " + err.ErrorMessage || err);
    } else {
      return Observable.throw(error.errorMessage || error);
    }
  }

  private endSession() {
    localStorage.removeItem("isLoggedin");
    localStorage.removeItem("authUser");
    this.router.navigate(["login"]);
  }
}
