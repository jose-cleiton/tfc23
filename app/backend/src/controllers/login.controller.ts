import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';
import { ILoginService, TokenResponse, RequestUser } from '../interfaces/userLogin.interface';
import Token from '../utils/token';

export default class LoginController {
  constructor(private loginService: ILoginService) { }
  async userLogin(req: Request, res: Response) {
    const { id, role } = await this.loginService.userLogin(req.body);
    const token = new Token().generate(id, role);
    console.log(token);
    res.status(StatusCodes.OK).send({ token });
  }

  static validateUser(req: RequestUser, res: Response) {
    const { role } = req.user as TokenResponse;
    res.status(StatusCodes.OK).send({ role });
  }
}
