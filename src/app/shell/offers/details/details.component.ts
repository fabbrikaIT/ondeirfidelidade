import {Location} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsLocaleService } from 'ngx-bootstrap';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { ptBrLocale } from 'ngx-bootstrap/locale';
import { Subscriber } from 'rxjs';

import { OffersEntity } from './../../../shared/models/offers/offers.model';
import { BaseComponent } from '../../../shared/base/base.component';
import { OffersService } from '../../../shared/services/offers.service';
import { AlertService } from '../../../shared/modules/alert/alert.service';
import { DialogService } from '../../../shared/modules/dialog/dialog.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent extends BaseComponent implements OnInit {
  headerTitle: string = "";
  isNew: boolean = false;
  activeStatus: boolean = false;

  offer: OffersEntity;

  constructor(alert: AlertService, private service: OffersService, private _localeService: BsLocaleService, private location: Location,
             private route: ActivatedRoute, private formBuilder: FormBuilder, private dialogService: DialogService) {
    super(alert);
  }

  ngOnInit() {
    // ajustando calendários
    defineLocale('pt-br', ptBrLocale);
    this._localeService.use('pt-br');

    // iniciando entidade de dados
    this.offer = OffersEntity.getInstance();

    this.initForm();

    this.route.params.subscribe( params => {
      if (params["id"]) {
        this.isProcessing = true;

        this.isNew = false;
        this.headerTitle = "Editar Oferta";

        this.service.GetOffers(params["id"]).subscribe(
          ret => {
            this.isProcessing = false;

            this.offer = ret;

            if (this.offer.status === 1) {
              this.activeStatus = true;
            }
          },
          err => {
            this.alert.alertError("Detalhe de Oferta", err);
              this.isProcessing = false;
          }
        );
      } else {
        this.isNew = true;
        this.headerTitle = "Criar Nova Oferta";
      }
    });
  }

  // Inicializa os campos do formulário
  initForm() {
    this.formFields = this.formBuilder.group({
      title: ["", Validators.required],
      startDate: [null, Validators.required],
      endDate: [null],
      type: ["1", Validators.required ],
      restrictions: [""],
      description: [""],
      discount: [0],
      reward: [""]
    });
  }

  onOffersStatusChange() {

  }
}
