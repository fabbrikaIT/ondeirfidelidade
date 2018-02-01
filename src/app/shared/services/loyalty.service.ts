import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

import { BaseService } from '../base/base.service';
import { AppConfig } from '../config/app.config';
import { LoyaltyEntity } from '../models/loyalty/loyalty';

@Injectable()
export class LoyaltyService extends BaseService {


  constructor(private clientHttp: HttpClient, config: AppConfig, router: Router) {
    super(config, router);
  }

  public ListLoyalty(ownerId: number): Observable<Array<LoyaltyEntity>> {
    const serviceUrl = `${this.config.baseUrl}loyalty/list/${ownerId}`;

        return this.clientHttp
            .get(serviceUrl)
            .map((res: Response) => {
                return (res as any).Result;
            })
            .catch(this.handleErrorObservable);
  }

  public ListLoyaltyByStatus(ownerId: number, status: string): Observable<Array<LoyaltyEntity>> {
    const serviceUrl = `${this.config.baseUrl}loyalty/list/${ownerId}/${status}`;

        return this.clientHttp
            .get(serviceUrl)
            .map((res: Response) => {
                return (res as any).Result;
            })
            .catch(this.handleErrorObservable);
  }

  public GetLoyalty(loyaltyId: number): Observable<LoyaltyEntity> {
    const serviceUrl = `${this.config.baseUrl}loyalty/${loyaltyId}`;

    return this.clientHttp
            .get(serviceUrl)
            .map((res: Response) => {
                return (res as any).Result;
            })
            .catch(this.handleErrorObservable);
  }
}
