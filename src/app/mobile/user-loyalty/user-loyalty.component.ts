import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../shared/base/base.component';

import { AlertService } from '../../shared/modules/alert/alert.service';
import { LoyaltyService } from '../../shared/services/loyalty.service';
import { LoyaltyEntity } from '../../shared/models/loyalty/loyalty';

@Component({
  selector: 'app-user-loyalty',
  templateUrl: './user-loyalty.component.html',
  styleUrls: ['./user-loyalty.component.scss']
})
export class UserLoyaltyComponent extends BaseComponent implements OnInit {
  userId: number = 0;
  loyalties: Array<LoyaltyEntity> = new Array<LoyaltyEntity>();

  constructor(alert: AlertService, private service: LoyaltyService, private route: ActivatedRoute,
    private router: Router) {
    super(alert);
   }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        if (params["userId"]) {
          this.userId = params["userId"];
          this.searchLoyalties(params["userId"]);
        }
      }
    );
  }

  private searchLoyalties(cityId) {
    this.isProcessing = true;

    this.service.ListUserLoyalty(cityId).subscribe(
      ret => {
        this.isProcessing = false;

        this.loyalties = ret;
      },
      err => {
        this.isProcessing = false;
        this.alert.alertError("Progrmas de Fidelidade", err);
      }
    );
  }

  // Front-End Methods
  showDetails(loyalty) {
    this.router.navigate(["/mobile/loyalty/details/" + loyalty.id]);
  }

  showCard(loyalty) {
    this.router.navigate([`/card/${loyalty.qrHash}/${this.userId}`]);
  }

  applyLoyalty(loyalty) {
    // TODO
  }
}
