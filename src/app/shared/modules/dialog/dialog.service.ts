import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class DialogService {
  public dialog: EventEmitter<IDialogData> = new EventEmitter<IDialogData>();
  public displayContent: EventEmitter<IDialogContent> = new EventEmitter<IDialogContent>();
  public dialogResult: EventEmitter<boolean> = new EventEmitter<boolean>();

  public dialogInformation(title: string, message: string) {
    this.openDialog(title, message, EDialogType.Information);
}

public dialogPrompt(message: string) {
    this.openDialog("Dialog", message, EDialogType.Prompty);
}

public dialogContent(title: string, content: any, callback, confirmText?: string, cancelText?: string) {
  const data: IDialogContent = {
    dialog: {
      title: title,
      type: EDialogType.Content,
      message: "",
      confirmText: confirmText,
      cancelText: cancelText
    },
    content: content,
    callback: callback
  };

  this.displayContent.emit(data);
}

public dialogConfirm(title: string, message: string, confirmText?: string, cancelText?: string) {
    this.openDialog(title, message, EDialogType.Confirm);
}

private openDialog(title: string, message: string, type: EDialogType, confirmText: string = "", cancelText: string = "") {
    const data: IDialogData = {
        title: title,
        message: message,
        type: type,
        confirmText: confirmText,
        cancelText: cancelText
    };

    this.dialog.emit(data);
}
}

export interface IDialogData {
  title: string;
  message: string;
  type: EDialogType;
  confirmText: string;
  cancelText: string;
}

export interface IDialogContent {
  dialog: IDialogData;
  content: any;
  callback: any;
}

export enum EDialogType {
  Information = 1,
  Prompty = 2,
  Confirm = 3,
  Content = 4
}
