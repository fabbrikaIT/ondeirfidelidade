import { OwnerService } from './../../shared/services/owner.service';
import { Component, OnInit } from '@angular/core';

import { BaseComponent } from '../../shared/base/base.component';
import { AlertService } from '../../shared/modules/alert/alert.service';
import { Validators, FormBuilder } from '@angular/forms';
import { DialogService } from '../../shared/modules/dialog/dialog.service';
import { OwnerEntity } from '../../shared/models/owner/ownerEntity';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent extends BaseComponent implements OnInit {
  owner: OwnerEntity;

  constructor(alert: AlertService, private service: OwnerService, private formBuilder: FormBuilder, private dialogService: DialogService) {
    super(alert);
  }

  ngOnInit() {
    this.isProcessing = true;

    this.initForm();

    // iniciando entidade de dados
    this.owner = OwnerEntity.getInstance();

    this.service.GetOwner(this.loginInfo.userId).subscribe(
      ret => {
        this.isProcessing = false;

        this.owner = ret;
      },
      err => {
        this.alert.alertError("Meus Dados", err);
        this.isProcessing = false;
      }
    );
  }

  initForm() {
    this.formFields = this.formBuilder.group({
      id: [{value: 0, disabled: true}],
      name: ["", Validators.required],
      email: ["", Validators.required],
      cellphone: ["", Validators.required],
      title: [{value: "", disabled: true}]
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
    if (this.validOnSubmit) {
      this.isProcessing = true;

      this.service.UpdateOwner(this.owner).subscribe(
        ret => {
          this.isProcessing = false;
          this.alert.alertInformation("Atualizar Meus Dados", "Dados atualizados com sucesso");
        },
        err => {
          this.isProcessing = false;
          this.alert.alertError("Atualizar dados", err);
        }
      );
    }
  }
}
