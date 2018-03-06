import { OffersEntity } from './../shared/models/offers/offers.model';
import { DialogService } from './../shared/modules/dialog/dialog.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BaseComponent } from '../shared/base/base.component';
import { AlertService } from '../shared/modules/alert/alert.service';
import { OffersService } from '../shared/services/offers.service';
import { VoucherComponent } from '../shell/offers/voucher/voucher.component';

@Component({
  selector: 'app-offer-coupon',
  templateUrl: './offer-coupon.component.html',
  styleUrls: ['./offer-coupon.component.scss']
})
export class OfferCouponComponent extends BaseComponent implements OnInit {

  componentData = null;
  offer: OffersEntity;
  userId: number;

  constructor(alert: AlertService, private service: OffersService, private route: ActivatedRoute, private router: Router,
          private dialogService: DialogService) {
    super(alert);
   }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.isProcessing = true;

      if (params["qrHash"] && params["userId"]) {
        this.userId = params["userId"];

        this.service.GetOfferHash(params["qrHash"], params["userId"]).subscribe(
          offer => {
            this.isProcessing = false;

            if (offer) {
              this.offer = offer;
              this.callLoyaltyCard(offer);
            } else {
              this.router.navigate(["/"]);
            }
          },
          err => {
            this.isProcessing = false;
            this.alert.alertError("Cartão Fidelidade", err);
          }
        );
      } else {
        this.router.navigate(["/"]);
      }
    });
  }


  callLoyaltyCard(offer) {
    this.componentData = {
      component: VoucherComponent,
      inputs: {
        offer: offer,
        canUse: true
      }
    };
  }

  // Front-End Methods
  useCoupon() {
    this.dialogService.dialogConfirm("Utilizar Cupom",
      "Deseja utilizar este cupom? Após sua utilização você não poderá utilizá-lo novamente!",
      "Sim", "Não", (choice) => {
        if (choice) {
          this.isProcessing = true;
          this.service.UseCoupon(this.userId, this.offer.id).subscribe(
            ret => {
              this.router.navigate([`/mobile/offers/user/${this.userId}`]);
            },
            err => {
              this.isProcessing = false;
              this.alert.alertError("Utilizar Cupom", err);
            }
          );
        }
      });
  }
}
