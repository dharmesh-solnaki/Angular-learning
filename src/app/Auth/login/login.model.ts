export class LoginResponseModel {
  constructor(
    public errorMsg: string,
    public statusCode: number,
    public response: { token: string; role: string }
  ) {}
}
