export class LoginResultEntity {
  loginAccept: boolean;
  userName: string;
  authenticationToken: string;
  type: number;
  userId: number;

  public static GetInstance(): LoginResultEntity {
    const instance = new LoginResultEntity();
    instance.loginAccept = false;
    instance.type = 1;
    instance.userId = 1;

    return instance;
  }
}
