import User from '../database/models/User.model';
import { IUserModel } from '../interfaces/userLogin.interface';

export default class UserRepository implements IUserModel {
  constructor(private _model = User) { }

  async getByEmail(email: string):Promise<User | null> {
    const user = await this._model.findOne({ where: { email } });
    return user;
  }
}
