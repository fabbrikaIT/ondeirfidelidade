import { StoreEntity } from './../models/owner/store.entity';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

import { BaseService } from '../base/base.service';
import { AppConfig } from '../config/app.config';

@Injectable()
export class ReportsService extends BaseService {


  constructor(private clientHttp: HttpClient, config: AppConfig, router: Router) {
    super(config, router);
  }

  public GetLoyaltyNumber(ownerId: number): Observable<number> {
    const serviceUrl = `${this.config.baseUrl}reports/dashboard/loyalties/${ownerId}`;

        return this.clientHttp
            .get(serviceUrl)
            .map((res: Response) => {
                return (res as any).Result;
            })
            .catch(this.handleErrorObservable);
  }

  public GetOffersNumber(ownerId: number): Observable<number> {
    const serviceUrl = `${this.config.baseUrl}reports/dashboard/offers/${ownerId}`;

        return this.clientHttp
            .get(serviceUrl)
            .map((res: Response) => {
                return (res as any).Result;
            })
            .catch(this.handleErrorObservable);
  }
}
