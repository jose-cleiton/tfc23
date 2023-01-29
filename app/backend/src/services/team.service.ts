import Team from '../database/models/Team.model';
import { ITeamService, ITeamModel } from '../interfaces/teams.interface';

export default class TeamService implements ITeamService {
  constructor(private _model: ITeamModel) {}
  async getAll(): Promise<Team[]> {
    const teams = await this._model.getAll();
    return teams;
  }

  async getById(id: number): Promise<Team | null> {
    const teamId = await this._model.getById(id);
    return teamId;
  }
}
