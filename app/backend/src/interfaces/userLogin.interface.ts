import { Request } from 'express';
import User from '../database/models/User.model';

export interface ILogin {
  email: string;
  password: string;
}

export type LoginResponse = {
  id: number;
  email: string;
  role: string;
};

export interface ILoginService {
  userLogin(data: ILogin): Promise<LoginResponse>
}

export interface IUserModel {
  getByEmail(email: string): Promise<User | null >
}

export type TokenResponse = {
  userId: number,
  role: string,
};

export interface RequestUser extends Request {
  user?: TokenResponse
}
