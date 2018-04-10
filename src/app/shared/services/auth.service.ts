import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

import { BaseService } from '../base/base.service';
import { AppConfig } from '../config/app.config';
import { LoginResultEntity } from '../models/auth/loginResult.model';

@Injectable()
export class AuthService extends BaseService {
  constructor( private clientHttp: HttpClient, config: AppConfig, router: Router) {
    super(config, router);
  }

  public Login(user: string, password: string): Observable<LoginResultEntity> {
    const serviceUrl = `${this.config.baseUrl}auth`;

    const body = {
      user: user,
      password: password
    };

        return this.clientHttp
            .post(serviceUrl, body)
            .map((res: Response) => {
                return (res as any).Result;
            })
            .catch(this.handleErrorObservable);
  }

  public OndeIrLogin(user: string, password: string): Observable<LoginResultEntity> {
    const serviceUrl = `${this.config.ondeIrApi}loginAdmin.php?username=${user}&password=${password}`;

    return this.clientHttp
      .get(serviceUrl)
      .map((res: Response) => {
        const userOndeIr = (res as any);

        const userRet: LoginResultEntity = LoginResultEntity.GetInstance();

        if (userOndeIr.status) {
          userRet.loginAccept = false;
        } else {
          // userRet.userId = userOndeIr.Codigo;
          userRet.userId = 0;
          userRet.type = 2;
          userRet.userName = userOndeIr.Nome;
          userRet.loginAccept = true;
          userRet.cities = userOndeIr.codCidade;
          userRet.authenticationToken = userOndeIr.Telefone;

          if (userRet.cities && userRet.cities.length > 0) {
            userRet.cityId = userRet.cities[0].CodCidade;
          }
        }

        return userRet;
      })
      .catch(this.handleErrorObservable);
  }

  public ResetPassword(email: string): Observable<boolean> {
    const serviceUrl = `${this.config.baseUrl}owner/reset`;

    const body = {
        email: email
    };

    return this.clientHttp.post(serviceUrl, body).map(
          (res: Response) => {
              return (res as any).executed;
          })
          .catch(this.handleErrorObservable);
  }
}
