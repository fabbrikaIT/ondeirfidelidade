import {Location} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsLocaleService } from 'ngx-bootstrap';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { ptBrLocale } from 'ngx-bootstrap/locale';
import { Subscriber } from 'rxjs';

import { BaseComponent } from '../../../shared/base/base.component';
import { AlertService } from './../../../shared/modules/alert/alert.service';
import { LoyaltyEntity } from '../../../shared/models/loyalty/loyalty';
import { LoyaltyService } from './../../../shared/services/loyalty.service';
import { LoyaltyValidity } from '../../../shared/models/loyalty/loyaltyValidity';
import { DialogService } from './../../../shared/modules/dialog/dialog.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent extends BaseComponent implements OnInit, OnDestroy {
  headerTitle: string = "";
  isNew: boolean = false;
  activeStatus: boolean = false;
  hasValidity: boolean = false;
  minDate: Date;

  loyalty: LoyaltyEntity;

  dialogSubscriber: any;

  constructor(alert: AlertService, private route: ActivatedRoute, private formBuilder: FormBuilder, private dialogService: DialogService,
              private service: LoyaltyService, private _localeService: BsLocaleService, private location: Location) {
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

  ngOnDestroy() {
    if (this.dialogSubscriber) {
      this.dialogSubscriber.unsubscribe();
    }
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
    this.isProcessing = true;

    if (this.activeStatus) {
      this.service.ActiveLoyalty(this.loyalty.id).subscribe(
        ret => {
          this.isProcessing = false;
        },
        err => {
            this.alert.alertError("Publicação de Fidelidade", err);
            this.isProcessing = false;
        });
    } else {
      this.service.InactiveLoyalty(this.loyalty.id).subscribe(
        ret => {
          this.isProcessing = false;
        },
        err => {
            this.alert.alertError("Inativação de Fidelidade", err);
            this.isProcessing = false;
        });
    }
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

  //Imprimi QR Code de identificação.
  onPrintQRCode() {

  }

  // Salva os dados do programa
  onSave() {
    if (this.formIsValid) {
      this.isProcessing = true;

      window.scrollTo(0, 0);

      if (this.isNew) {
        this.loyalty.ownerId = this.loginInfo.userId;

        console.log(this.loyalty);
        console.log(this.loginInfo);

        this.service.CreateLoyalty(this.loyalty).subscribe(
          ret => {
            this.isProcessing = false;

            // Verificar se usuário quer publicar o programa
            if (!this.dialogSubscriber) {
              this.dialogSubscriber = this.dialogService.dialogResult.subscribe(dialogResult => {
                if (dialogResult) {
                  this.activeStatus = true;
                  this.onLoyaltyStatusChange();
                }
              });
            }

            this.dialogService.dialogConfirm("Programa de Fidelidade", "Deseja publicar o programa de fidelidade criado?");

            // Mostrar QR Code para impressão

            this.location.back();
          },
          err => {
            this.alert.alertError("Criando novo Fidelidade", err);
              this.isProcessing = false;
          }
        );
      } else {
        this.service.UpdateLoyalty(this.loyalty).subscribe(
          ret => {
            this.isProcessing = false;

            this.alert.alertInformation("Fidelidade", "Programa de Fidelidade atualizado com sucesso");
          },
          err => {
            this.alert.alertError("Atualizar Fidelidade", err);
              this.isProcessing = false;
          });
      }
    }
  }
}
