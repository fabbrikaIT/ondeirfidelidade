import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class DialogService {
  public dialog: EventEmitter<IDialogData> = new EventEmitter<IDialogData>();
  public dialogResult: EventEmitter<boolean> = new EventEmitter<boolean>();

  public dialogInformation(title: string, message: string) {
    this.openDialog(title, message, EDialogType.Information);
}

public dialogPrompt(message: string) {
    this.openDialog("Dialog", message, EDialogType.Prompty);
}

public dialogConfirm(title: string, message: string) {
    this.openDialog(title, message, EDialogType.Confirm);
}

private openDialog(title: string, message: string, type: EDialogType) {
    const data: IDialogData = {
        title: title,
        message: message,
        type: type
    };

    this.dialog.emit(data);
}
}

export interface IDialogData {
  title: string;
  message: string;
  type: EDialogType;
}

export enum EDialogType {
  Information = 1,
  Prompty = 2,
  Confirm = 3
}
