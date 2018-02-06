import { Component, OnInit } from '@angular/core';

import { BaseComponent } from '../../shared/base/base.component';
import { AlertService } from '../../shared/modules/alert/alert.service';
import { OwnerService } from './../../shared/services/owner.service';
import { OwnerEntity } from '../../shared/models/owner/ownerEntity';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss']
})
export class OwnerComponent extends BaseComponent implements OnInit {
  owners: Array<OwnerEntity>;

  constructor(alert: AlertService, private service: OwnerService) {
    super(alert);
   }

  ngOnInit() {
    this.ListOwners();
  }

  ListOwners() {
    this.isProcessing = true;

    this.service.ListOwner().subscribe(
      ret => {
          this.isProcessing = false;

          this.owners = ret;
      },
      err => {
          this.alert.alertError("Listar Credendiados", err);
          this.isProcessing = false;
      }
    );
  }
}
