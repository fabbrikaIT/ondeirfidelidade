import { StoreEntity } from './../models/owner/store.entity';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import 'rxjs/add/operator/toPromise';

import { BaseService } from '../base/base.service';
import { AppConfig } from '../config/app.config';
import { OwnerEntity } from '../models/owner/ownerEntity';

@Injectable()
export class OwnerService extends BaseService {


  constructor(private clientHttp: HttpClient, config: AppConfig, router: Router) {
    super(config, router);
  }

  public ListOwner(): Observable<Array<OwnerEntity>> {
    const serviceUrl = `${this.config.baseUrl}owner/list/${this.loginInfo.cityId}`;

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

  // public ResetPassword(ownerId: number): Observable<boolean> {
  //   const serviceUrl = `${this.config.baseUrl}owner/reset/${ownerId}`;
  //   const body = {
  //     id: ownerId
  //   };

  //   return this.clientHttp
  //           .post(serviceUrl, body)
  //           .map((res: Response) => {
  //               return (res as any).Executed;
  //           })
  //           .catch(this.handleErrorObservable);
  // }

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

  public GetStores(cityId: number, filter: string): Observable<any> {
    if (!filter) {
      return Observable.of(new Array<StoreEntity>());
    }

     // const serviceUrl = `${this.config.ondeIrApi}SearchPlaces?categoryId=0&searchText=${filter}`;
     const serviceUrl = `${this.config.ondeIrApi}search_stores.php?max_count=20&codcidade=${cityId}&keywords=${filter}`;

        return this.clientHttp.get(serviceUrl)
        .map((res) => {
          return (res as any).stores;
          // return (res as any).stores;
        })
        .catch(this.handleErrorObservable);
  }

  public UpdatePassword(ownerId: number, password: string): Observable<boolean> {
    const serviceUrl = `${this.config.baseUrl}owner/updatePassword`;

    const body = {
        memberId: ownerId,
        password: password
    };

    return this.clientHttp.post(serviceUrl, body).map(
          (res: Response) => {
              return (res as any).executed;
          })
          .catch(this.handleErrorObservable);
  }
}
