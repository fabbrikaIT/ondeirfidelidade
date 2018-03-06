import { Component, OnInit, Injector } from '@angular/core';

import { OffersEntity } from './../../../shared/models/offers/offers.model';
import { AlertService } from '../../../shared/modules/alert/alert.service';
import { BaseComponent } from '../../../shared/base/base.component';
import { OffersService } from '../../../shared/services/offers.service';

@Component({
  selector: 'app-voucher',
  templateUrl: './voucher.component.html',
  styleUrls: ['./voucher.component.scss']
})
export class VoucherComponent extends BaseComponent implements OnInit {
  offer: OffersEntity;
  canUse: boolean;

  constructor(alert: AlertService, private injector: Injector) {
    super(alert);

    if (this.injector.get("offer")) {
      this.offer = this.injector.get("offer");
    }

    if (this.injector.get("canUse")) {
      this.canUse = this.injector.get("canUse");
    }
  }

  ngOnInit() {

  }

}
