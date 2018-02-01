import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { BaseComponent } from "../../shared/base/base.component";
import { AlertService } from "../../shared/modules/alert/alert.service";
import { LoyaltyService } from "../../shared/services/loyalty.service";
import { LoyaltyEntity } from "../../shared/models/loyalty/loyalty";

@Component({
  selector: "app-loyalty",
  templateUrl: "./loyalty.component.html",
  styleUrls: ["./loyalty.component.scss"]
})
export class LoyaltyComponent extends BaseComponent implements OnInit {
  loyalties: Array<LoyaltyEntity>;
  selectedStatusFilter: string = "0";

  constructor(alert: AlertService, private service: LoyaltyService, private router: Router, private activatedRoute: ActivatedRoute) {
    super(alert);
  }

  ngOnInit() {
    this.ListLoyalty();
  }

  private ListLoyalty() {
    this.isProcessing = true;

    this.service.ListLoyalty(this.loginInfo.userId).subscribe(
      ret => {
          this.isProcessing = false;

          this.loyalties = ret;
      },
      err => {
          this.alert.alertError("Fidelidade", err);
          this.isProcessing = false;
      }
    );
  }

  private ListLoyaltyByStatus() {
    this.isProcessing = true;

    this.service.ListLoyaltyByStatus(this.loginInfo.userId, this.selectedStatusFilter).subscribe(
      ret => {
          this.isProcessing = false;

          this.loyalties = ret;
      },
      err => {
          this.alert.alertError("Fidelidade", err);
          this.isProcessing = false;
      }
    );
  }

  onSelectChange() {
    if (this.selectedStatusFilter === "0") {
      this.ListLoyalty();
    } else {
      this.ListLoyaltyByStatus();
    }
  }
}
