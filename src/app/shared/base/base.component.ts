import { FormGroup } from '@angular/forms';

import { LoginResultEntity } from '../models/auth/loginResult.model';
import { AlertService } from '../modules/alert/alert.service';

export abstract class BaseComponent {
  public isProcessing: boolean = false;
  public loginInfo: LoginResultEntity = this.getLoginInfo();
  protected formFields: FormGroup;

  constructor(protected alert: AlertService) {

  }

  // Compartilha os dados so usuário logado
  public getLoginInfo(): LoginResultEntity {
    if (!localStorage.getItem("authUser")) {
      const ret: LoginResultEntity = new LoginResultEntity();
      ret.loginAccept = false;
      ret.userName = "Usuário";
      ret.type = 1;

      return ret;
    }

    return JSON.parse(localStorage.getItem("authUser"));
  }

  public closeAllAlerts() {
    this.alert.closeAlert();
  }

  // public verifyValidTouched(campo) {
  //   return !campo.valid && (campo.touched || campo.dirty);
  // }
  verifyValidTouched(campo) {
    return (
      !this.formFields.get(campo).valid && (this.formFields.get(campo).touched || this.formFields.get(campo).dirty)
    );
  }

  verifyTouched(campo) {
    return (this.formFields.get(campo).touched);
  }

  public applyCssError(campo) {
    return {
      'has-error' : this.verifyValidTouched(campo),
      'has-feedback' : this.verifyValidTouched(campo),
      'is-invalid': this.verifyValidTouched(campo),
      'is-valid': !this.verifyValidTouched(campo) && this.verifyTouched(campo)
    };
  }
}
