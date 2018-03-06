import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { LoyaltyService } from './../../shared/services/loyalty.service';
import { AlertService } from './../../shared/modules/alert/alert.service';
import { BaseComponent } from '../../shared/base/base.component';
import { LoyaltyEntity } from '../../shared/models/loyalty/loyalty';


@Component({
  selector: 'app-loyalty-details',
  templateUrl: './loyalty-details.component.html',
  styleUrls: ['./loyalty-details.component.scss']
})
export class LoyaltyDetailsComponent extends BaseComponent implements OnInit {
  loyalty: LoyaltyEntity = LoyaltyEntity.getInstance();
  modalRef: BsModalRef;
  chosenCameraSubject = new Subject();

  constructor(alert: AlertService, private service: LoyaltyService, private route: ActivatedRoute,
    private location: Location, private modalService: BsModalService) {
    super(alert);
   }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        if (params["id"]) {
          this.getLoyalty(params["id"]);
        }
      }
    );
  }

  getLoyalty(id) {
    this.isProcessing = true;

    this.service.GetLoyalty(id).subscribe(
      ret => {
        this.isProcessing = false;

        this.loyalty = ret;
      },
      err => {
        this.isProcessing = false;
        this.alert.alertError("Progrma de Fidelidade", err);
      }
    );
  }


  // Front-end methods
  goBack() {
    this.location.back();
  }

  openQRCode(template) {
    this.modalRef = this.modalService.show(template);
  }

  qrCodecallback(ret) {
    console.log(ret);
  }

  decodedOutput($event: string) {
    console.log('Decoded', $event);
  }

  listCameras($event: MediaDeviceInfo[]) {
    console.log('MediaDeviceInfo', $event);
    this.chosenCameraSubject.next($event.filter(device => device.kind === 'videoinput')[0]);
  }
}
