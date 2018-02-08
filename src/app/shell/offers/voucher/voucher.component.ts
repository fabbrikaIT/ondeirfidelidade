import { Component, OnInit, Injector } from '@angular/core';

import { OffersEntity } from './../../../shared/models/offers/offers.model';
import { AlertService } from '../../../shared/modules/alert/alert.service';
import { BaseComponent } from '../../../shared/base/base.component';

@Component({
  selector: 'app-voucher',
  templateUrl: './voucher.component.html',
  styleUrls: ['./voucher.component.scss']
})
export class VoucherComponent extends BaseComponent implements OnInit {
  offer: OffersEntity;

  constructor(alert: AlertService, private injector: Injector) {
    super(alert);

    if (this.injector.get("offer")) {
      this.offer = this.injector.get("offer");
    }
  }

  ngOnInit() {
  }

}
