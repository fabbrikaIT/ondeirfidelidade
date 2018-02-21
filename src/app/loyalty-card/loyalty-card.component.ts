import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BaseComponent } from '../shared/base/base.component';
import { AlertService } from '../shared/modules/alert/alert.service';
import { LoyaltyService } from '../shared/services/loyalty.service';
import { CardComponent } from './../shell/loyalty/card/card.component';
import { LoyaltyProgramEntity } from '../shared/models/loyalty/loyaltyProgram';

@Component({
  selector: 'app-loyalty-card',
  templateUrl: './loyalty-card.component.html',
  styleUrls: ['./loyalty-card.component.scss']
})
export class LoyaltyCardComponent extends BaseComponent implements OnInit {

  componentData = null;

  constructor(alert: AlertService, private service: LoyaltyService, private route: ActivatedRoute, private router: Router) {
    super(alert);
   }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.isProcessing = true;

      if (params["qrHash"] && params["userId"]) {
        this.service.GetLoyaltyProgram(params["qrHash"], params["userId"]).subscribe(
          program => {
            if (program) {
              this.service.GetLoyalty(program.LoyaltyId).subscribe(
                loyalty => {
                  this.isProcessing = false;

                  this.callLoyaltyCard(program, loyalty);
                }
              );
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


  callLoyaltyCard(program, loyalty) {
    this.componentData = {
      component: CardComponent,
      inputs: {
        loyalty: loyalty,
        program: program
      }
    };
  }
}
