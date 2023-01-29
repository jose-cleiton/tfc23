import TeamController from '../controllers/teams.controller';
import TeamService from '../services/team.service';
import TeamRepository from '../repositories/team.repository';

export default () => {
  const model = new TeamRepository();
  const service = new TeamService(model);
  const controller = new TeamController(service);

  return controller;
};
