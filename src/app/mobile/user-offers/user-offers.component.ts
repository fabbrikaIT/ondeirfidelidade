
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../shared/base/base.component';

import { AlertService } from '../../shared/modules/alert/alert.service';
import { OffersEntity } from './../../shared/models/offers/offers.model';
import { OffersService } from '../../shared/services/offers.service';
import { DialogService } from '../../shared/modules/dialog/dialog.service';
import { VoucherComponent } from '../../shell/offers/voucher/voucher.component';

@Component({
  selector: 'app-user-offers',
  templateUrl: './user-offers.component.html',
  styleUrls: ['./user-offers.component.scss']
})
export class UserOffersComponent extends BaseComponent implements OnInit {
  userId: number = 0;
  offers: Array<OffersEntity> = new Array<OffersEntity>();

  constructor(alert: AlertService, private service: OffersService, private route: ActivatedRoute,
    private router: Router, private dialogService: DialogService) {
    super(alert);
   }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        if (params["userId"]) {
          this.userId = params["userId"];
          localStorage["userId"] = params["userId"];

          this.searchOffers(params["userId"]);
        }
      }
    );
  }

  private searchOffers(cityId) {
    this.isProcessing = true;

    this.service.ListUserOffers(cityId).subscribe(
      ret => {
        this.isProcessing = false;

        this.offers = ret;
      },
      err => {
        this.isProcessing = false;
        this.alert.alertError("Ofertas", err);
      }
    );
  }

  // Front-End Methods
  showDetails(offers) {
    this.router.navigate([`/coupon/${offers.qrHash}/${this.userId}`]);
  }
}
