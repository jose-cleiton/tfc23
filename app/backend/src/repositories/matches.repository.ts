import Team from '../database/models/Team.model';
import Match from '../database/models/Match.model';
import { IMatchModel, TUpGoals, IResMatch } from '../interfaces/matches.interface';

export default class MatchesRepository implements IMatchModel {
  constructor(private _model = Match) { }

  async getAll(inProgress: boolean | undefined): Promise<IResMatch[]> {
    let match;
    if (inProgress !== undefined) {
      match = await this._model.findAll({ where: { inProgress },
        include: [
          { model: Team, as: 'homeTeam', attributes: { exclude: ['id'] } },
          { model: Team, as: 'awayTeam', attributes: { exclude: ['id'] } },
        ],
      });
    } else {
      match = await this._model.findAll({
        include: [
          { model: Team, as: 'homeTeam', attributes: { exclude: ['id'] } },
          { model: Team, as: 'awayTeam', attributes: { exclude: ['id'] } },
        ],
      });
    }
    return match as IResMatch[];
  }

  async create(data: Omit<Match, 'id' | 'inProgress'>): Promise<Match> {
    const done = this._model.create(data);
    return done;
  }

  async updated(id: number): Promise<void> {
    await this._model.update({ inProgress: false }, { where: { id } });
  }

  async updateGoals(id: number, data: TUpGoals): Promise<void> {
    await this._model.update(data, { where: { id } });
  }
}
