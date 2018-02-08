import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { ptBrLocale } from 'ngx-bootstrap/locale';
import { BsLocaleService } from 'ngx-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscriber } from 'rxjs';

import { BaseComponent } from '../../../shared/base/base.component';
import { AlertService } from '../../../shared/modules/alert/alert.service';
import { DialogService } from '../../../shared/modules/dialog/dialog.service';
import { OwnerEntity } from './../../../shared/models/owner/ownerEntity';
import { OwnerService } from './../../../shared/services/owner.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent extends BaseComponent implements OnInit {
  headerTitle: string = "";
  isNew: boolean = false;

  owner: OwnerEntity;

  constructor(alert: AlertService, private _localeService: BsLocaleService, private location: Location, private service: OwnerService,
    private formBuilder: FormBuilder, private dialogService: DialogService, private route: ActivatedRoute) {
      super(alert);
   }

  ngOnInit() {
    // ajustando calendários
    defineLocale('pt-br', ptBrLocale);
    this._localeService.use('pt-br');

    // iniciando entidade de dados
    this.owner = OwnerEntity.getInstance();

    this.initForm();

    this.route.params.subscribe( params => {
      if (params["id"]) {
        this.isProcessing = true;

        this.isNew = false;
        this.headerTitle = "Editar Credenciado de Fidelidade";

        this.service.GetOwner(params["id"]).subscribe(
          ret => {
            this.isProcessing = false;

            this.owner = ret;
          },
          err => {
            this.alert.alertError("Detalhe Credenciado", err);
            this.isProcessing = false;
          }
        );
      } else {
        this.isNew = true;
        this.headerTitle = "Credenciar novo Fidelidade";
      }
    });
  }

  // Inicializa os campos do formulário
  initForm() {
    this.formFields = this.formBuilder.group({
       name: ["", Validators.required],
       email: ["", Validators.required],
       cellphone: ["", Validators.required],
       title: ["", Validators.required]
    });
  }

  onDelete() {
    this.dialogService.dialogConfirm("Excluir Credenciado", "Deseja realmente excluir cliente credenciado?", "Excluir", "Cancelar", ret => {
      if (ret) {
        this.isProcessing = true;

        this.service.DeleteOwner(this.owner.id).subscribe(
          result => {
            this.location.back();
          },
          err => {
            this.alert.alertError("Excluir Credenciado", err);
              this.isProcessing = false;
          }
        );
      }
    });
  }

  onSave() {

  }
}
