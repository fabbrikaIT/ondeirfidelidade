import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { ptBrLocale } from 'ngx-bootstrap/locale';
import { BsLocaleService, TypeaheadMatch } from 'ngx-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscriber, Observable } from 'rxjs';
import "rxjs/add/operator/map";
import "rxjs/add/operator/finally";

import { BaseComponent } from '../../../shared/base/base.component';
import { AlertService } from '../../../shared/modules/alert/alert.service';
import { DialogService } from '../../../shared/modules/dialog/dialog.service';
import { OwnerEntity } from './../../../shared/models/owner/ownerEntity';
import { OwnerService } from './../../../shared/services/owner.service';
import { StoreEntity } from '../../../shared/models/owner/store.entity';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent extends BaseComponent implements OnInit {
  headerTitle: string = "";
  isNew: boolean = false;

  owner: OwnerEntity;

  dataSource: Array<StoreEntity> = new Array<StoreEntity>();
  selectedStore: string;
  typeaheadLoading: boolean;
  typeaheadNoResults: boolean;

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
    // this.initStores();

    this.route.params.subscribe( params => {
      if (params["id"]) {
        this.isProcessing = true;

        this.isNew = false;
        this.headerTitle = "Editar Credenciado de Fidelidade";

        this.service.GetOwner(params["id"]).subscribe(
          ret => {
            this.isProcessing = false;

            this.owner = ret;
            this.selectedStore = this.owner.title;
          },
          err => {
            this.alert.alertError("Detalhe Credenciado", err);
            this.isProcessing = false;
          }
        );
      } else {
        this.isNew = true;
        this.headerTitle = "Credenciar novo Fidelidade";

        this.owner.logo = "assets/images/pinOndeIr.png";
      }
    });
  }

  // Recuperando a lista de estabelecimentos
  initStores() {
    // this.dataSource = Observable.create((observer: any) => {
    //   // Runs on every search
    //   if (this.selectedStore && this.selectedStore.length >= 3) {
    //     observer.next(this.selectedStore);
    //   }
    // }).mergeMap((token: string) => this.service.GetStores(token));
  }

  loadDataSource(e) {
    if (e && e !== this.selectedStore) {
      this.typeaheadLoading = true;
      this.selectedStore = e;

      if (this.selectedStore && this.selectedStore.length >= 3) {
        this.service.GetStores(this.selectedStore).subscribe(
          ret => {
            this.dataSource = ret;
            this.typeaheadLoading = false;
          },
          err => {
            this.dataSource = new Array<StoreEntity>();
            this.typeaheadLoading = false;
          }
        );
      } else {
        this.dataSource = new Array<StoreEntity>();
        this.typeaheadLoading = false;
      }
    }
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

  onFileSelect(files) {
    if (files && files.length > 0) {
      const reader = new FileReader();
      reader.onload = () => {
        this.owner.logo = reader.result;
      };

      reader.readAsDataURL(files[0]);

    }
  }

  onSave() {
    if (this.formIsValid) {
      this.isProcessing = true;
      window.scrollTo(0, 0);

      if (this.isNew) {
        this.service.CreateOwner(this.owner).subscribe(
          ret => {
            this.isProcessing = false;
            this.alert.alertInformation("Novo Cliente", "Cliente criado com sucesso");

            this.location.back();

          },
          err => {
            this.isProcessing = false;
            this.alert.alertError("Novo Cliente", err);
          }
        );

      } else {
        this.service.UpdateOwner(this.owner).subscribe(
          ret => {
            this.isProcessing = false;

            this.alert.alertInformation("Atualizar Cliente", "Dados do cliente atualizados com sucesso");
          },
          err => {
            this.isProcessing = false;
            this.alert.alertError("Atualizar Cliente", err);
          }
        );
      }
    }
  }

  /** Integração com base do aplicativo Onde Ir */
  changeTypeaheadLoading(e: boolean): void {
    if (this.selectedStore && this.selectedStore.length >= 3) {
      this.typeaheadLoading = e;
    } else {
      this.typeaheadLoading = false;
    }

  }

  changeTypeaheadNoResults(e: boolean): void {
    console.log(e);
    this.typeaheadNoResults = e;
  }

  typeaheadOnSelect(e: TypeaheadMatch): void {
    if (e && e.item) {
      this.owner.ondeIrId = e.item.id;
      this.owner.title = e.item.name;
    }
  }
}
