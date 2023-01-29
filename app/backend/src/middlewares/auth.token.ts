import * as dotenv from 'dotenv';
import * as jwt from 'jsonwebtoken';
import { JwtPayload } from 'jsonwebtoken';
import { Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import ErrorHandler from '../utils/error.handler';
import { RequestUser } from '../interfaces/userLogin.interface';

dotenv.config();

export default async (req: RequestUser, _res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) throw new ErrorHandler(StatusCodes.UNAUTHORIZED, 'Token not found');

  try {
    const result = jwt.verify(token, process.env.JWT_SECRET as jwt.Secret) as JwtPayload;
    req.user = result.data;
    next();
  } catch (err) {
    throw new ErrorHandler(StatusCodes.UNAUTHORIZED, 'Token must be a valid token');
  }
};
