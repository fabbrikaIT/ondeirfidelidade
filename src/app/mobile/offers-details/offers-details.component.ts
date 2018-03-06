import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { BaseComponent } from '../../shared/base/base.component';
import { AlertService } from '../../shared/modules/alert/alert.service';
import { OffersService } from './../../shared/services/offers.service';
import { OffersEntity } from './../../shared/models/offers/offers.model';
import { VoucherComponent } from '../../shell/offers/voucher/voucher.component';
import { DialogService } from '../../shared/modules/dialog/dialog.service';

@Component({
  selector: 'app-offers-details',
  templateUrl: './offers-details.component.html',
  styleUrls: ['./offers-details.component.scss']
})
export class OffersDetailsComponent extends BaseComponent implements OnInit {

  offer: OffersEntity = OffersEntity.getInstance();
  modalRef: BsModalRef;
  chosenCameraSubject = new Subject();

  constructor(alert: AlertService, private service: OffersService, private route: ActivatedRoute,
    private location: Location, private modalService: BsModalService, private dialogService: DialogService) {
    super(alert);
   }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        if (params["id"]) {
          this.getOffer(params["id"]);
        }
      }
    );
  }

  getOffer(id) {
    this.isProcessing = true;

    this.service.GetOffers(id).subscribe(
      ret => {
        this.isProcessing = false;

        this.offer = ret;
      },
      err => {
        this.isProcessing = false;
        this.alert.alertError("Ofertas", err);
      }
    );
  }


  // Front-end methods
  goBack() {
    this.location.back();
  }

  onVoucher() {
    if (localStorage["userId"]){
      const userId = localStorage["userId"];
      this.isProcessing = true;

      this.service.createCoupon(userId, this.offer.id).subscribe(
        ret => {
          this.isProcessing = false;

          this.dialogService.dialogContent("Cupom de Desconto", {
            component: VoucherComponent,
            inputs: {
              offer: this.offer,
              canUse: true
            }
          }, this.closeVoucher, "Aprovar", "Fechar", false);
        },
        err => {
          this.isProcessing = false;
          this.alert.alertError("Oferta", err);
        }
      );
    }
  }

  closeVoucher() {}
}
