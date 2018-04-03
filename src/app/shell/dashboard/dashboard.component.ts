import { Component, OnInit } from '@angular/core';

import { BaseComponent } from '../../shared/base/base.component';
import { AlertService } from '../../shared/modules/alert/alert.service';
import { ReportsService } from '../../shared/services/reports.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends BaseComponent implements OnInit {

  loyaltyNumber: number = 0;
  offersNumber: number = 0;
  programsNumber: number = 0;
  couponsNumber: number = 0;

  isGettingLoyalty: boolean = false;
  isGettingOffers: boolean = false;
  isGettingPrograms: boolean = false;
  isGettingCoupons: boolean = false;

  constructor(alert: AlertService, private service: ReportsService) {
    super(alert);
  }

  ngOnInit() {
    this.GetLoyaltyNumber();
    this.GetOffersNumber();
    this.GetCouponsNumber();
    this.GetProgramsNumber();
  }

  GetLoyaltyNumber() {
    this.isGettingLoyalty = true;
    this.service.GetLoyaltyNumber(this.loginInfo.userId).subscribe(
      ret => {
        this.isGettingLoyalty = false;
        this.loyaltyNumber = ret;
      },
      err => {
        this.loyaltyNumber = -1;
        this.isGettingLoyalty = false;
      }
    );
  }

  GetOffersNumber() {
    this.isGettingOffers = true;
    this.service.GetOffersNumber(this.loginInfo.userId).subscribe(
      ret => {
        this.isGettingOffers = false;
        this.offersNumber = ret;
      },
      err => {
        this.offersNumber = -1;
        this.isGettingOffers = false;
      }
    );
  }

  GetProgramsNumber() {
    this.isGettingPrograms = true;
    this.service.GetProgramsNumber(this.loginInfo.userId).subscribe(
      ret => {
        this.isGettingPrograms = false;
        this.programsNumber = ret;
      },
      err => {
        this.programsNumber = -1;
        this.isGettingPrograms = false;
      }
    );
  }

  GetCouponsNumber() {
    this.isGettingCoupons = true;
    this.service.GetCouponsNumber(this.loginInfo.userId).subscribe(
      ret => {
        this.isGettingCoupons = false;
        this.couponsNumber = ret;
      },
      err => {
        this.couponsNumber = -1;
        this.isGettingCoupons = false;
      }
    );
  }
}
