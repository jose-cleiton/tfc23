import * as Joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import ErrorHandler from '../utils/error.handler';

const schema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

export default async (req: Request, _res: Response, next: NextFunction) => {
  const { error } = schema.validate(req.body);
  if (error) throw new ErrorHandler(StatusCodes.BAD_REQUEST, 'All fields must be filled');
  next();
};
