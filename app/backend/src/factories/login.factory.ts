import LoginController from '../controllers/login.controller';
import LoginService from '../services/login.service';
import UserRepository from '../repositories/user.repository';

export default () => {
  const model = new UserRepository();
  const service = new LoginService(model);
  const controller = new LoginController(service);
  return controller;
};
