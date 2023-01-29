import Team from '../database/models/Team.model';
import { ITeamModel } from '../interfaces/teams.interface';

export default class TeamRepository implements ITeamModel {
  constructor(private _model = Team) {}

  async getAll(): Promise<Team[]> {
    const teams = await this._model.findAll();
    return teams;
  }

  async getById(id: number): Promise<Team | null> {
    const teamId = await this._model.findByPk(id);
    return teamId;
  }
}
