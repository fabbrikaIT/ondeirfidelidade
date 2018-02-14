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
