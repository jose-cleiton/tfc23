import MatchController from '../controllers/matches.controller';
import MatchesRepository from '../repositories/matches.repository';
import MatchService from '../services/matches.service';
import TeamRepository from '../repositories/team.repository';

export default () => {
  const model = new MatchesRepository();
  const teamModel = new TeamRepository();
  const service = new MatchService(model, teamModel);
  const controller = new MatchController(service);

  return controller;
};
