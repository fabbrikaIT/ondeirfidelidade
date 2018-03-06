
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../shared/base/base.component';

import { AlertService } from '../../shared/modules/alert/alert.service';
import { OffersEntity } from './../../shared/models/offers/offers.model';
import { OffersService } from '../../shared/services/offers.service';

@Component({
  selector: 'app-list-offers',
  templateUrl: './list-offers.component.html',
  styleUrls: ['./list-offers.component.scss']
})
export class ListOffersComponent extends BaseComponent implements OnInit {

  offers: Array<OffersEntity> = new Array<OffersEntity>();

  constructor(alert: AlertService, private service: OffersService, private route: ActivatedRoute,
    private router: Router) {
    super(alert);
   }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        if (params["userId"]) {
          localStorage["userId"] = params["userId"];
        }
        if (params["cityId"]) {
          this.searchOffers(params["cityId"]);
        }
      }
    );
  }

  private searchOffers(cityId) {
    this.isProcessing = true;

    this.service.SearchOffers(cityId).subscribe(
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
    this.router.navigate(["/mobile/offers/details/" + offers.id]);
  }
}
