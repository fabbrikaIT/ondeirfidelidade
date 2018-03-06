import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../shared/base/base.component';

import { AlertService } from '../../shared/modules/alert/alert.service';
import { LoyaltyService } from '../../shared/services/loyalty.service';
import { LoyaltyEntity } from '../../shared/models/loyalty/loyalty';

@Component({
  selector: 'app-list-loyalty',
  templateUrl: './list-loyalty.component.html',
  styleUrls: ['./list-loyalty.component.scss']
})
export class ListLoyaltyComponent extends BaseComponent implements OnInit {

  loyalties: Array<LoyaltyEntity> = new Array<LoyaltyEntity>();

  constructor(alert: AlertService, private service: LoyaltyService, private route: ActivatedRoute,
    private router: Router) {
    super(alert);
   }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        if (params["cityId"]) {
          this.searchLoyalties(params["cityId"]);
        }
      }
    );
  }

  private searchLoyalties(cityId) {
    this.isProcessing = true;

    this.service.SearchLoyalty(cityId).subscribe(
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
}
