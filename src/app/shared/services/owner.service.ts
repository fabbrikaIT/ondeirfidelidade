import { StoreEntity } from './../models/owner/store.entity';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

import { BaseService } from '../base/base.service';
import { AppConfig } from '../config/app.config';
import { OwnerEntity } from '../models/owner/ownerEntity';

@Injectable()
export class OwnerService extends BaseService {


  constructor(private clientHttp: HttpClient, config: AppConfig, router: Router) {
    super(config, router);
  }

  public ListOwner(): Observable<Array<OwnerEntity>> {
    const serviceUrl = `${this.config.baseUrl}owner`;

        return this.clientHttp
            .get(serviceUrl)
            .map((res: Response) => {
                return (res as any).Result;
            })
            .catch(this.handleErrorObservable);
  }

  public GetOwner(ownerId: number): Observable<OwnerEntity> {
    const serviceUrl = `${this.config.baseUrl}owner/${ownerId}`;

    return this.clientHttp
            .get(serviceUrl)
            .map((res: Response) => {
                const owner: OwnerEntity = (res as any).Result;
                owner.registerDate = new Date(owner.registerDate);

                return owner;
            })
            .catch(this.handleErrorObservable);
  }

  public ResetPassword(ownerId: number): Observable<boolean> {
    const serviceUrl = `${this.config.baseUrl}owner/reset/${ownerId}`;
    const body = {
      id: ownerId
    };

    return this.clientHttp
            .post(serviceUrl, body)
            .map((res: Response) => {
                return (res as any).Executed;
            })
            .catch(this.handleErrorObservable);
  }

  public DeleteOwner(ownerId: number): Observable<boolean> {
    const serviceUrl = `${this.config.baseUrl}owner/${ownerId}`;

    return this.clientHttp
            .delete(serviceUrl)
            .map((res: Response) => {
                return (res as any).Executed;
            })
            .catch(this.handleErrorObservable);
  }

  /**
   * Create a new owner
   */
  public CreateOwner(owner: OwnerEntity): Observable<boolean> {
    const serviceUrl = `${this.config.baseUrl}owner`;

    return this.clientHttp
            .post(serviceUrl, owner)
            .map((res: Response) => {
                return (res as any).Executed;
            })
            .catch(this.handleErrorObservable);
  }

  /**
   * Update owner informations
   */
  public UpdateOwner(owner: OwnerEntity): Observable<boolean> {
    const serviceUrl = `${this.config.baseUrl}owner`;

    return this.clientHttp
            .put(serviceUrl, owner)
            .map((res: Response) => {
                return (res as any).Executed;
            })
            .catch(this.handleErrorObservable);
  }

  public GetStores(filter: string): Observable<any> {
    if (!filter) {
      return Observable.of(new Array<StoreEntity>());
    }

    const serviceUrl = `${this.config.ondeIrApi}SearchPlaces?categoryId=0&searchText=${filter}`;

    return this.clientHttp.get(serviceUrl)
        .map((res: Response) => {
          // console.log((res as any).places);
          return (res as any).places;
        })
        .catch(this.handleErrorObservable);
  }
}
