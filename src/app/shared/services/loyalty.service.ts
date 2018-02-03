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
                const loyalty: LoyaltyEntity = (res as any).Result;
                loyalty.startDate = new Date(loyalty.startDate);
                loyalty.endDate = new Date(loyalty.endDate);

                // if (loyalty.validity) {
                //   loyalty.validity.forEach(x => {
                //     x.startTime = new Date((x.startTime as Date).getTimezoneOffset());
                //     x.endTime = new Date((x.endTime as Date).getTimezoneOffset());
                //   });
                // }
                // console.log(loyalty.validity);

                return loyalty;
            })
            .catch(this.handleErrorObservable);
  }

  public ActiveLoyalty(loyaltyId: number): Observable<boolean> {
    const serviceUrl = `${this.config.baseUrl}loyalty/activate`;
    const body = {
      id: loyaltyId
    };

    return this.clientHttp
            .post(serviceUrl, body)
            .map((res: Response) => {
                return (res as any).Result;
            })
            .catch(this.handleErrorObservable);
  }

  public InactiveLoyalty(loyaltyId: number): Observable<boolean> {
    const serviceUrl = `${this.config.baseUrl}loyalty/deactivate`;
    const body = {
      id: loyaltyId
    };

    return this.clientHttp
            .post(serviceUrl, body)
            .map((res: Response) => {
                return (res as any).Result;
            })
            .catch(this.handleErrorObservable);
  }

  /**
   * CreateLoyalty
   */
  public CreateLoyalty(loyalty: LoyaltyEntity): Observable<boolean> {
    const serviceUrl = `${this.config.baseUrl}loyalty`;

    return this.clientHttp
            .post(serviceUrl, loyalty)
            .map((res: Response) => {
                return (res as any).Result;
            })
            .catch(this.handleErrorObservable);
  }

  /**
   * Update Loyalty
   */
  public UpdateLoyalty(loyalty: LoyaltyEntity): Observable<boolean> {
    const serviceUrl = `${this.config.baseUrl}loyalty`;

    return this.clientHttp
            .put(serviceUrl, loyalty)
            .map((res: Response) => {
                return (res as any).Result;
            })
            .catch(this.handleErrorObservable);
  }
}
