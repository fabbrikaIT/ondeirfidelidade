import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BaseComponent } from '../../../shared/base/base.component';
import { AlertService } from './../../../shared/modules/alert/alert.service';
import { LoyaltyEntity } from '../../../shared/models/loyalty/loyalty';
import { LoyaltyService } from './../../../shared/services/loyalty.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent extends BaseComponent implements OnInit {
  headerTitle: string = "";
  isNew: boolean = false;
  
  loyalty: LoyaltyEntity;

  constructor(alert: AlertService, private route: ActivatedRoute, private formBuilder: FormBuilder, private service: LoyaltyService) {
    super(alert);
  }

  ngOnInit() {
    this.loyalty = LoyaltyEntity.getInstance();
    this.initForm();

    this.route.params.subscribe( params => {
      if (params["id"]) {
        this.isProcessing = true;

        this.isNew = false;
        this.headerTitle = "Editar Programa de Fidelidade";

        this.service.GetLoyalty(params["id"]).subscribe(
          ret => {
            this.isProcessing = false;

            this.loyalty = ret;
          },
          err => {
              this.alert.alertError("Detalhe de Fidelidade", err);
              this.isProcessing = false;
          }
        );
      } else {
        this.isNew = true;
        this.headerTitle = "Criar Novo Programa de Fidelidade";
      }
    });
  }

  // Inicializa os campos do formulário
  initForm() {
    this.formFields = this.formBuilder.group({
      name: ["", Validators.required],
      startDate: [new Date(), Validators.required],
      endDate: [null],
      type: [{ value: "Utilização", disabled: true }],
      dayLimit: [0],
      usageLimit: [0],
      usageType: this.formBuilder.group({
        usageGoal: [null, Validators.required],
        usageReward: ["", Validators.required]
      })
    });
  }

}
