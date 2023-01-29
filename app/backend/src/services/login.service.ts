import * as bcrypt from 'bcryptjs';
import { StatusCodes } from 'http-status-codes';
import ErrorHandler from '../utils/error.handler';
import { ILogin, ILoginService, LoginResponse, IUserModel }
  from '../interfaces/userLogin.interface';

export default class LoginService implements ILoginService {
  constructor(private _model: IUserModel) {}
  async userLogin(data: ILogin): Promise<LoginResponse> {
    const user = await this._model.getByEmail(data.email);
    const error = new ErrorHandler(StatusCodes.UNAUTHORIZED, 'Incorrect email or password');

    if (!user) throw error;

    const isValid = await bcrypt.compare(data.password, user.password);
    if (!isValid) throw error;

    return {
      id: user.id,
      email: user.email,
      role: user.role,
    };
  }
}
