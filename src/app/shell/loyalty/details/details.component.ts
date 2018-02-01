import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsLocaleService } from 'ngx-bootstrap';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { ptBrLocale } from 'ngx-bootstrap/locale';

import { BaseComponent } from '../../../shared/base/base.component';
import { AlertService } from './../../../shared/modules/alert/alert.service';
import { LoyaltyEntity } from '../../../shared/models/loyalty/loyalty';
import { LoyaltyService } from './../../../shared/services/loyalty.service';
import { LoyaltyValidity } from '../../../shared/models/loyalty/loyaltyValidity';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent extends BaseComponent implements OnInit {
  headerTitle: string = "";
  isNew: boolean = false;
  activeStatus: boolean = false;
  hasValidity: boolean = false;
  minDate: Date;

  loyalty: LoyaltyEntity;

  constructor(alert: AlertService, private route: ActivatedRoute, private formBuilder: FormBuilder,
              private service: LoyaltyService, private _localeService: BsLocaleService) {
    super(alert);
  }

  ngOnInit() {
    // ajustando calendários
    defineLocale('pt-br', ptBrLocale);
    this._localeService.use('pt-br');

    // iniciando entidade de dados
    this.loyalty = LoyaltyEntity.getInstance();
    this.minDate = new Date();

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

            console.log(this.loyalty);

            if (this.loyalty.validity) {
              this.hasValidity = true;
            }

            if (this.loyalty.status === 2) {
              this.activeStatus = true;
            }
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
      startDate: [null, Validators.required],
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

  // Verifica a ativação ou desativação de um programa
  onLoyaltyStatusChange() {

  }

  onValidityAdd() {
    if (!this.loyalty.validity) {
      this.loyalty.validity = new Array<LoyaltyValidity>();
    }

    this.loyalty.validity.push(LoyaltyValidity.getInstance());
  }

  onValidityRemove(validity) {
    const index = this.loyalty.validity.indexOf(validity, 0);
    if (index > -1) {
      this.loyalty.validity.splice(index, 1);
    }
  }
}
