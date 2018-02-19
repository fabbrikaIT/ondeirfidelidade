export class LoginResultEntity {
  loginAccept: boolean;
  userName: string;
  authenticationToken: string;
  type: number;
  userId: number;
  cityId: number;

  public static GetInstance(): LoginResultEntity {
    const instance = new LoginResultEntity();
    instance.loginAccept = false;
    instance.type = 1;
    instance.userId = 1;
    instance.cityId = 0;

    return instance;
  }
}
