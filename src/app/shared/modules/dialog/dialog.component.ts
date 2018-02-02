import { Component, OnInit, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

import { DialogService, IDialogData, EDialogType } from './dialog.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  @ViewChild('template') dialogTemplate;

  title: string;
  message: string;

  isConfirm: boolean = false;

  modalRef: BsModalRef;

  constructor(private dialogService: DialogService, private modalService: BsModalService) {

  }

  ngOnInit() {
    this.dialogService.dialog.subscribe((dialog: IDialogData) => {
      this.setModalData(dialog);

      this.modalRef = this.modalService.show(this.dialogTemplate);

    });
  }

  setModalData(dialog: IDialogData) {
    this.title = dialog.title;
    this.message = dialog.message;

    switch (dialog.type) {
      case EDialogType.Information:
        this.isConfirm = false;
        break;
      case EDialogType.Prompty:
        this.isConfirm = false;
        break;
      case EDialogType.Confirm:
        this.isConfirm = true;
        break;
      default:
        break;
    }
  }

  close() {
    this.modalRef.hide();
  }

  emitDialogResult(result) {
    this.dialogService.dialogResult.emit(result);

    this.modalRef.hide();
  }
}
