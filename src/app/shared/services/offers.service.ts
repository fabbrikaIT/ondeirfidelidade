import { EOfferStatus } from './../models/offers/offers.model';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

import { BaseService } from '../base/base.service';
import { AppConfig } from '../config/app.config';
import { OffersEntity } from '../models/offers/offers.model';

@Injectable()
export class OffersService extends BaseService {


  constructor(private clientHttp: HttpClient, config: AppConfig, router: Router) {
    super(config, router);
  }

  public ListOffers(ownerId: number): Observable<Array<OffersEntity>> {
    const serviceUrl = `${this.config.baseUrl}offers/list/${ownerId}`;

        return this.clientHttp
            .get(serviceUrl)
            .map((res: Response) => {
                return (res as any).Result;
            })
            .catch(this.handleErrorObservable);
  }

  public ListOffersStatus(ownerId: number, status: string): Observable<Array<OffersEntity>> {
    const serviceUrl = `${this.config.baseUrl}offers/list/${ownerId}/${status}`;

        return this.clientHttp
            .get(serviceUrl)
            .map((res: Response) => {
                return (res as any).Result;
            })
            .catch(this.handleErrorObservable);
  }

  public GetOffers(OffersId: number): Observable<OffersEntity> {
    const serviceUrl = `${this.config.baseUrl}offers/${OffersId}`;

    return this.clientHttp
            .get(serviceUrl)
            .map((res: Response) => {
                const offers: OffersEntity = (res as any).Result;
                offers.startDate = new Date(offers.startDate);
                offers.endDate = new Date(offers.endDate);

                return offers;
            })
            .catch(this.handleErrorObservable);
  }

  public DeleteOffers(OffersId: number): Observable<boolean> {
    const serviceUrl = `${this.config.baseUrl}offers/${OffersId}`;

    return this.clientHttp
            .delete(serviceUrl)
            .map((res: Response) => {
                return (res as any).Executed;
            })
            .catch(this.handleErrorObservable);
  }

  /**
   * Create a new Offers
   */
  public CreateOffers(offers: OffersEntity): Observable<boolean> {
    const serviceUrl = `${this.config.baseUrl}offers`;

    return this.clientHttp
            .post(serviceUrl, offers)
            .map((res: Response) => {
                return (res as any).Executed;
            })
            .catch(this.handleErrorObservable);
  }

  /**
   * Update Offers informations
   */
  public UpdateOffers(offers: OffersEntity): Observable<boolean> {
    const serviceUrl = `${this.config.baseUrl}offers`;

    return this.clientHttp
            .put(serviceUrl, offers)
            .map((res: Response) => {
                return (res as any).Executed;
            })
            .catch(this.handleErrorObservable);
  }
}
