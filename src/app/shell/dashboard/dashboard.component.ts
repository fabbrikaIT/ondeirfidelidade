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

  isGettingLoyalty: boolean = true;
  isGettingOffers: boolean = false;

  constructor(alert: AlertService, private service: ReportsService) {
    super(alert);
  }

  ngOnInit() {
    this.GetLoyaltyNumber();
    this.GetOffersNumber();
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
}
