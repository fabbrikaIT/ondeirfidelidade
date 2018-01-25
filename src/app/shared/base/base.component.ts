import { LoginResultEntity } from '../models/auth/loginResult.model';

export abstract class BaseComponent {
  public isProcessing: boolean = false;
  public alerts: Array<any> = [];
  public loginInfo: LoginResultEntity = this.getLoginInfo();

  // Compartilha os dados so usuário logado
  public getLoginInfo(): LoginResultEntity {
    if (!localStorage.getItem("loginInfo")) {
      const ret: LoginResultEntity = new LoginResultEntity();
      ret.loginAccept = false;
      ret.userName = "Usuário";

      return ret;
    }

    return JSON.parse(localStorage.getItem("loginInfo"));
  }

  public closeAlert(alert: any) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }

  public closeAllAlerts() {
    this.alerts.forEach(x => this.closeAlert(x));
  }
}
