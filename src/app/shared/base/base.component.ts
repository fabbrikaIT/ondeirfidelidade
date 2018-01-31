import { LoginResultEntity } from '../models/auth/loginResult.model';
import { AlertService } from '../modules/alert/alert.service';

export abstract class BaseComponent {
  public isProcessing: boolean = false;
  public alerts: Array<any> = [];
  public loginInfo: LoginResultEntity = this.getLoginInfo();

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

  public closeAlert(alert: any) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }

  public closeAllAlerts() {
    this.alerts.forEach(x => this.closeAlert(x));
  }
}
